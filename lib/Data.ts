export type Project = {
  tag: string;
  title: string;
  href: string;
  cta: string;
  text: string;
  tags: string[];
  role?: string;
  features?: string[];
  live?: string;
  code?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    tag: "Development",
    title: "ShoeStep: Django E-Commerce Website",
    href: "https://github.com/dzumbunubibian",
    cta: "View on GitHub ↗",
    text: "An online shoe shop built with Django where customers can browse products and place orders.",
    tags: ["Django", "Python", "HTML", "CSS"],
    role: "Designed and built the full site",
    features: [],
    live: "",
    code: "https://github.com/dzumbunubibian",
    image: "",
  },
  {
    tag: "Development",
    title: "Student Score Tracker",
    href: "https://github.com/dzumbunubibian",
    cta: "View on GitHub ↗",
    text: "A tool for recording and tracking student scores.",
    tags: [],
    role: "",
    features: [],
    live: "",
    code: "",
    image: "",
  },
  {
    tag: "Development",
    title: "School Website",
    href: "https://github.com/dzumbunubibian",
    cta: "View on GitHub ↗",
    text: "A responsive website for a school with clear navigation and key information pages.",
    tags: [],
    role: "",
    features: [],
    live: "",
    code: "",
    image: "",
  },
  {
    tag: "Strategy",
    title: "Nash Paints Marketing Strategy",
    href: "https://canva.link/xqb7a94tx1188o3",
    cta: "View project ↗",
    text: "A marketing case study covering audience research, SWOT analysis, content planning, marketing funnels, campaign budgeting and KPIs.",
    tags: ["Digital Marketing", "Content Strategy", "Analytics"],
    role: "Researched and wrote the full strategy",
    features: ["Audience research", "SWOT analysis", "Content calendar", "Campaign budget and KPIs"],
    live: "https://canva.link/xqb7a94tx1188o3",
    code: "",
    image: "",
  },
  {
    tag: "UI & UX",
    title: "Interface Design",
    href: "https://www.figma.com/design/eLGE0ySlNHuNg6xTMdo64o/Figma-basics?node-id=1669-162202&t=8hyM87Dhh2Uj8hGW-1",
    cta: "View project ↗",
    text: "Design concepts focused on clear layouts, navigation, visual hierarchy and accessible user experiences.",
    tags: ["Figma", "UI/UX", "Prototyping"],
    role: "Designed the screens and prototype",
    features: ["Clear layouts", "Navigation flow", "Visual hierarchy", "Accessible design"],
    live: "https://www.figma.com/design/eLGE0ySlNHuNg6xTMdo64o/Figma-basics?node-id=1669-162202&t=8hyM87Dhh2Uj8hGW-1",
    code: "",
    image: "",
  },
  {
    tag: "Creative",
    title: "Graphic Design Collection",
    href: "https://canva.link/xqb7a94tx1188o3",
    cta: "View project ↗",
    text: "Visual communication concepts for digital content, promotional materials and consistent brand identity.",
    tags: ["Canva", "Branding", "Visual Design"],
    role: "Designed all graphics",
    features: [],
    live: "https://canva.link/xqb7a94tx1188o3",
    code: "",
    image: "",
  },
];

export const skills = [
  {
    title: "Development",
    text: "JavaScript · TypeScript · Python · React · Next.js · Nest.js · Django · Tailwind CSS · Git",
    value: 75,
    usedIn: "ShoeStep and this portfolio",
  },
  {
    title: "Design",
    text: "Figma · Canva · Layout Design · Visual Communication",
    value: 85,
    usedIn: "Interface designs and the graphic design collection",
  },
  {
    title: "Marketing",
    text: "Marketing Strategy · Content Planning · SWOT · KPIs",
    value: 80,
    usedIn: "Nash Paints marketing strategy",
  },
];

export const learning = [
  { title: "Microsoft Excel", text: "Spreadsheet organisation, formulas, functions and data management.", status: "Course" },
  { title: "Canva & Content Strategy", text: "Visual content creation, brand consistency and content planning.", status: "Professional Development" },
  { title: "Coursera Certificate", text: "Introduction to software engineering", href: "https://www.coursera.org/account/accomplishments/verify/XP2WPIPBSH8X" },
];

export const styles = {
  section: "mx-auto max-w-[1250px] px-[6vw] py-16 md:py-20",
  h1: "text-[clamp(2rem,4vw,3rem)] font-bold leading-tight",
  grid: "mt-8 grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]",
  link: "mt-1 w-fit font-medium text-violet transition hover:text-amber",
};