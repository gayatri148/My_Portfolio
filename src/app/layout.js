import "./globals.css";
import { Inter, Sora, Caveat } from "next/font/google";
import { profile } from "@/data/content";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-hand",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://example.com"),
  title: `${profile.name} - Full Stack Developer & AI Engineer`,
  description: profile.tagline,
  keywords: [
    "Gayatri Gurugubelli",
    "Full Stack Developer",
    "AI Engineer",
    "React",
    "Next.js",
    "Portfolio",
    "Bengaluru",
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} - Full Stack Developer & AI Engineer`,
    description: profile.tagline,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} - Portfolio`,
    description: profile.tagline,
  },
};

export const viewport = {
  themeColor: "#147591",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} ${caveat.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
