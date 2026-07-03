import { NextResponse } from "next/server";

// Basic in-memory rate limiting (per server instance).
const hits = new Map();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;

function rateLimited(ip) {
  const now = Date.now();
  const arr = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  arr.push(now);
  hits.set(ip, arr);
  return arr.length > MAX_PER_WINDOW;
}

const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

// Insert a row into the Supabase "portfolio" table via the REST API.
async function saveToSupabase({ name, email, message }) {
  const rawUrl = process.env.SUPABASE_URL;
  const key =
    process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY;
  if (!rawUrl || !key) return { configured: false, ok: false };

  const url = rawUrl.trim().replace(/\/+$/, ""); // strip trailing slashes

  try {
    const res = await fetch(`${url}/rest/v1/portfolio`, {
      method: "POST",
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify([{ name, email, message }]),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error("Supabase insert failed:", res.status, detail);
      return { configured: true, ok: false, status: res.status, detail };
    }
    return { configured: true, ok: true };
  } catch (e) {
    console.error("Supabase request error:", e);
    return { configured: true, ok: false, status: 0, detail: String(e) };
  }
}

export async function POST(request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      "unknown";
    if (rateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again in a minute." },
        { status: 429 }
      );
    }

    const body = await request.json().catch(() => ({}));
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const message = String(body.message || "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }
    if (name.length > 120 || message.length > 4000) {
      return NextResponse.json({ error: "Input is too long." }, { status: 400 });
    }
    if (!isEmail(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // 1) Store the message in Supabase (primary store).
    const db = await saveToSupabase({ name, email, message });
    if (db.configured && !db.ok) {
      return NextResponse.json(
        {
          error: "Couldn't save your message. Please email me directly.",
          // Debug aid — shows the real Supabase reason in the response.
          supabaseStatus: db.status,
          supabaseDetail: db.detail,
        },
        { status: 500 }
      );
    }

    // 2) Optionally send an email notification if SMTP is configured.
    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO } =
      process.env;
    if (SMTP_HOST && SMTP_USER && SMTP_PASS) {
      const nodemailer = (await import("nodemailer")).default;
      const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: Number(SMTP_PORT) || 587,
        secure: Number(SMTP_PORT) === 465,
        auth: { user: SMTP_USER, pass: SMTP_PASS },
      });
      await transporter.sendMail({
        from: `"Portfolio Contact" <${SMTP_USER}>`,
        to: CONTACT_TO || SMTP_USER,
        replyTo: email,
        subject: `New portfolio message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      });
    }

    if (!db.configured && !(SMTP_HOST && SMTP_USER && SMTP_PASS)) {
      console.log("Contact form submission (no store configured):", {
        name,
        email,
        message,
      });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please email me directly." },
      { status: 500 }
    );
  }
}
