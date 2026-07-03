// ──────────────────────────────────────────────────────────────
// Central content file. Details sourced from github.com/gayatri148/My_Portfolio
// Anything marked "PLACEHOLDER" is safe to swap with your real data.
// ──────────────────────────────────────────────────────────────

export const profile = {
  name: "Gayatri Gurugubelli",
  firstName: "Gayatri",
  roles: [
    "Aspiring Web Developer",
    "AI / ML Enthusiast",
    "UI / UX Designer",
    "Problem Solver",
  ],
  tagline:
    "Passionate about creating amazing digital experiences with clean code and innovative solutions. I specialize in building scalable web applications and bringing ideas to life.",
  location: "Bengaluru, Karnataka",
  email: "gayatri.gurugubelli05@gmail.com",
  socials: {
    github: "https://github.com/gayatri148",
    linkedin: "https://www.linkedin.com/in/gayatri-gurugubelli-8912452a2/",
    portfolio: "#",
  },
  // PLACEHOLDER - drop a square photo in /public/profile.jpg (see README)
  photo: "/profile.jpg",
  resume:
    "https://drive.google.com/file/d/15fSyN8QWQf7VBcm84ERdb5qd2Ifr6j6f/view?usp=sharing",
};

export const about = {
  intro:
    "I'm a web developer passionate about building clean, user-friendly, and efficient websites - turning ideas into functional digital experiences with modern technologies, and always eager to learn more.",
  body: "I'm especially drawn to AI/ML and UI/UX design. I believe in writing clean, maintainable code and staying up-to-date with the latest industry trends. When I'm not coding, you'll find me exploring new technologies and contributing to open-source projects.",
  highlights: [
    { label: "CGPA", value: "9.69", suffix: "/10" },
    { label: "Projects", value: "5", suffix: "+" },
    { label: "Hackathon Wins", value: "4", suffix: "" },
    { label: "Certifications", value: "6", suffix: "+" },
  ],
};

export const experience = [
  {
    role: "Full Stack Developer Intern",
    company: "Joveo",
    type: "Onsite · New Initiatives Team",
    location: "Bengaluru, India",
    period: "Jan 2026 - Present",
    current: true,
    points: [
      "Contributing to a scalable job-board platform serving recruitment at scale.",
      "Implemented job categorization and recommendation features to surface the most relevant roles.",
      "Built reusable UI components and engineered database solutions powering core flows.",
    ],
    stack: ["React", "Node.js", "PostgreSQL", "MongoDB"],
  },
];

export const projects = [
  {
    title: "LeadLink CRM",
    subtitle: "CRM Platform for Sales Teams",
    year: "2025",
    blurb:
      "A production-ready, feature-rich CRM for high-performance sales teams - a modern full-stack app focused on stability, developer experience, and scalability.",
    points: [
      "Role-based access control across Sales Rep, Manager & Admin.",
      "Optimistic UI updates and smart caching with TanStack Query.",
      "JWT auth, rate limiting, and interactive Swagger API docs.",
    ],
    tags: ["React 18", "Vite", "Node.js", "Express", "PostgreSQL", "Prisma", "TanStack Query"],
    image: "/projects/leadlink.png",
    links: { github: "https://github.com/gayatri148/Lead-Link-CRM", live: "https://leadlink-app.onrender.com/" },
    accent: "from-blue to-ink",
  },
  {
    title: "DocsAI",
    subtitle: "Internal Q&A Agent",
    year: "2025",
    blurb:
      "An AI-powered internal document search and Q&A agent for teams, built with advanced NLP to deliver contextual answers with source highlighting.",
    points: [
      "Contextual answers over internal docs with source highlighting.",
      "Autocomplete, conversational memory, and usage analytics.",
      "Integrates multiple document sources for seamless retrieval.",
    ],
    tags: ["React", "Node.js", "FastAPI", "OpenAI API", "Tailwind CSS"],
    image: "/projects/docsai.png",
    links: { github: "https://github.com/gayatri148/DocsAI", live: "https://docsai-1.onrender.com/" },
    accent: "from-teal to-azure",
  },
  {
    title: "Money Mentor",
    subtitle: "Personal Finance Manager",
    year: "2025",
    blurb:
      "A smart personal-finance platform that tracks expenses, sets savings goals, and suggests personalized investment plans based on your financial profile.",
    points: [
      "Category-wise spending analytics and monthly budget recommendations.",
      "Personalized investment-plan suggestions from your profile.",
      "Future-value projections using the time value of money.",
    ],
    tags: ["React.js", "Node.js", "Express", "MongoDB", "Chart.js"],
    image: "/projects/moneymentor.png",
    links: { github: "#", live: "" },
    accent: "from-azure to-ink",
  },
  {
    title: "Smart Traffic & Safety AI",
    subtitle: "Real-time Road Safety Platform",
    year: "2025",
    blurb:
      "A real-time platform that detects vehicle speeds and helmet-less riders with YOLOv8, then generates a safety map with the safest routes.",
    points: [
      "Real-time speed & helmet detection using YOLOv8.",
      "Safety map highlighting the safest routes.",
      "Surfaces nearby police stations and hospitals en route.",
    ],
    tags: ["React (Vite)", "Flask", "Python", "YOLOv8", "PyTorch", "OpenCV"],
    image: "/projects/traffic.png",
    links: { github: "#", live: "" },
    accent: "from-ink to-teal",
  },
  {
    title: "Mini GitHub",
    subtitle: "Project Document Repository",
    year: "2025",
    blurb:
      "A lightweight document-management platform for students to upload, store, and share project files with faculty for reference and review.",
    points: [
      "Secure uploads with organized categorization.",
      "Share project files with faculty for review.",
      "Easy retrieval of stored documents.",
    ],
    tags: ["React", "Node.js", "Express", "MongoDB"],
    image: "/projects/minigithub.png",
    links: { github: "#", live: "" },
    accent: "from-teal to-blue",
  },
];

export const skills = [
  {
    group: "Frontend Development",
    items: ["React.js", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js"],
  },
  {
    group: "Backend Development",
    items: ["Node.js", "Express.js", "Python", "PostgreSQL", "MongoDB"],
  },
  {
    group: "Tools & Technologies",
    items: ["Git", "Docker", "AWS", "Figma", "Prisma"],
  },
];

export const skillRibbon = [
  "React", "TypeScript", "Next.js", "Node.js", "Express", "Python",
  "PostgreSQL", "MongoDB", "Tailwind CSS", "Docker", "AWS", "Figma", "Git", "Prisma",
];

export const awards = [
  {
    title: "Winner - Aventus 3.0",
    event: "National Hackathon · AIML Dept, DSCE",
    rank: "1st",
  },
  {
    title: "2nd Runner Up - AI Agent Hackathon",
    event: "Product Space (Online)",
    rank: "3rd",
  },
  {
    title: "2nd Place - Comeback Challenge",
    event: "Fix a failing company in 24 hours",
    rank: "2nd",
  },
  {
    title: "3rd Place - Poster Presentation",
    event: "National Symposium · AI Trends",
    rank: "3rd",
  },
];

// All via Infosys Springboard
export const certifications = [
  "Agile Scrum in Practice",
  "Artificial Intelligence",
  "Deep Learning",
  "Computer Vision",
  "Data Science",
  "Natural Language Processing",
];

export const education = {
  school: "Dayananda Sagar College of Engineering",
  degree: "B.E., Computer Science & Business Systems",
  period: "2023 - 2027",
  location: "Bengaluru, Karnataka",
  cgpa: "9.69 / 10.0",
};

export const extras = {
  title: "Design Team Head - Udbhava Club",
  description:
    "Led the design team and actively contributed to organizing and managing campus events.",
};

export const journey = [
  {
    year: "2023",
    title: "Started B.E. & began programming",
    org: "Dayananda Sagar College of Engineering",
    text: "Began my engineering journey and fell in love with problem-solving through C and C++.",
    tag: "Education",
  },
  {
    year: "2024",
    title: "Built my first full-stack app",
    org: "React · Node.js",
    text: "Shipped my first full-stack application, which sparked my passion for web development.",
    tag: "Projects",
  },
  {
    year: "2025",
    title: "AI products & 4× competition wins",
    org: "LeadLink CRM · DocsAI · Smart Traffic AI",
    text: "Shipped production-grade full-stack and AI products end-to-end, and won hackathons including Aventus 3.0.",
    tag: "Recognition",
  },
  {
    year: "2026",
    title: "Full Stack Developer Intern",
    org: "Joveo · New Initiatives Team",
    text: "Now building a scalable job-board platform on a production engineering team.",
    tag: "Experience",
    current: true,
  },
];

export const beyond = {
  bio: "When I'm not coding, I'm exploring new technologies, diving into AI/ML, sketching interfaces, or contributing to open-source. I believe great engineering and great design are the same craft seen from two angles.",
  interests: [
    { icon: "Palette", label: "UI / UX Design", note: "Figma is my happy place" },
    { icon: "BrainCircuit", label: "AI & ML", note: "Always learning" },
    { icon: "Trophy", label: "Hackathons", note: "Build fast, win faster" },
    { icon: "Users", label: "Community & Events", note: "Design Head @ Udbhava" },
    { icon: "BookOpen", label: "Continuous Learning", note: "6+ certifications" },
    { icon: "Coffee", label: "Open Source", note: "Exploring & contributing" },
  ],
  quote: "I build things that are useful, beautiful, and a little bit delightful.",
};

// Philosophies & quotes I build by. Swap any of these for your own -
// leave `author` empty for a personal principle, or add a name for a quote.
export const philosophies = [
  { text: "Build things that are useful, beautiful, and a little bit delightful.", author: "" },
  { text: "Design is not just what it looks like and feels like. Design is how it works.", author: "Steve Jobs" },
  { text: "Clarity over cleverness - code should read like a good story.", author: "" },
  { text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", author: "Martin Fowler" },
  { text: "Make it work, make it right, make it fast.", author: "Kent Beck" },
  { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Beyond", href: "#beyond" },
  { label: "Contact", href: "#contact" },
];
