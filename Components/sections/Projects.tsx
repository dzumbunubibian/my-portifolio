import { Reveal } from "@/Components/Ui";
import { styles } from "@/lib/Data";
import FlipCard from "@/Components/Flipcard";

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  live?: string;
  code?: string;
  link?: string;
};

const development: Project[] = [
  {
    title: "Conflict-App",
    description: "A web application that allows users to report and track conflicts in their community.",
    image: "/conflict-app.png",
    tags: [ "Tailwind", "React"],
    live: "https://example.com",
    code: "https://github.com/dzumbunubibian/conflict-app",
  },
  {
    title: "Money credit app",
    description: "A mobile app for managing personal finances and credit scores.",
    image: "/money.png",
    tags: ["HTML", "JavaScript", "Style.css"],
    code: "https://github.com/dzumbunubibian/money-app/branches",
  },
  {
    title: "Nyamatutsi",
    description:
      "Nyamatutsi is a lodge, offering game drives, walking safaris, bird watching, canoeing and fishing in the heart of the African bush.",
    image: "/zebraa.png",
    tags: ["React", "javascript"],
    code: "https://github.com/dzumbunubibian/nyamatutsi-site",
  },
  {
    title: "School website",
    description: "A website for a secondary school, showcasing its programs and activities.",
    image: "/school.png",
    tags: ["React", "javascript"],
    code: "https://github.com/dzumbunubibian/Gwayi-Secondary-School",
  },
  {
    title: "Career Tracker",
    description: "A web application for tracking career development and goals.",
    image: "/career.png",
    tags: ["Next.js", "JavaScript"],
    live: "https://github.com/dzumbunubibian/careertrack",
  },
  {
    title: "Counter App",
    description: "A simple counter application that allows users to increment and decrement a value.",
    image: "/counter.png",
    tags: ["HTML", "CSS", "JavaScript", ],
    code: "https://github.com/your-username/project-six",
  },
];

const design: Project[] = [
  {
    title: "Mocckup",
    description: "A mobile app concept that connects travelers with wildlife experiences, using warm safari imagery and a clean green interface.",
    image: "/mockup.png",
    tags: ["figma"],
    code: "https://www.figma.com/design/eLGE0ySlNHuNg6xTMdo64o/Figma-basics?node-id=1669-162202&t=OJXOeSiYcsUSRVzb-1",
  },

  {
    title: "Brand guidelines",
    description: "Brand guidelines ensure a brands visual identity and communication remain consisten.",
    image: "/branded.png",
    tags: ["figma"],
    code: "https://www.figma.com/design/eLGE0ySlNHuNg6xTMdo64o/Figma-basics?node-id=1669-162202&t=OJXOeSiYcsUSRVzb-1",
  },

  {
    title: "Poster design",
    description: "A poster design for a fictional event, using bold typography and vibrant colors to create a visually striking composition.",
    image: "/poster2.png",
    tags: ["figma"],
    code: "https://canva.link/py1n5na2pu3plg5",
  },
];

const marketing: Project[] = [
  {
    title: "Strategy Campaign",
    description: "A brand-focused marketing strategy deck for Nash Paints, built around its wide range of colors",
    image: "/market.png",
    tags: ["Content", "Strategy"],
    code: "https://canva.link/xqb7a94tx1188o3",
  },
  
  {
    title: "Posters",
    description: "Poster designs for advertising campaigns, made to grab attention and get one message across quickly.",
    image: "/posters.png",
    tags: ["Graphic Design", "Posters", "Canva"],
    code: "https://canva.link/acimd4es48gkz4x",
  },
   
  {
    title: "Newsletter",
    description: "Newsletter designs for a fictional company, focusing on engaging content and visual appeal.",
    image: "/newslettee.png",
    tags: ["Content", "Design", "Canva"],
    code: "https://us10.admin.mailchimp.com/campaigns/",
  },
];

const linkClass =
  "rounded-full border border-line px-4 py-1.5 font-mono text-xs transition hover:border-amber hover:text-amber";

function SectionHeading({ id, title, count }: { id: string; title: string; count: number }) {
  return (
    <div id={id} className="mb-6 flex scroll-mt-24 items-end justify-between border-b border-line pb-3">
      <h3 className="text-2xl font-extrabold uppercase italic tracking-tight">{title}</h3>
      <span className="font-mono text-xs text-violet">
        {count} {count === 1 ? "project" : "projects"}
      </span>
    </div>
  );
}

function Grid({ items }: { items: Project[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((p) => (
        <FlipCard
          key={p.title}
          title={p.title}
          description={p.description}
          image={p.image}
          link={p.live ?? p.code ?? p.link}
        />
      ))}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className={`${styles.section} scroll-mt-24`}>
      <Reveal>
        <h2 className="mb-3 text-[clamp(2.4rem,6vw,4.2rem)] font-black uppercase italic leading-[0.95] tracking-tight">
          My
          <span className="ml-3 text-transparent" style={{ WebkitTextStroke: "2px var(--color-violet)" }}>
            Projects
          </span>
        </h2>
        <p className="mb-8 max-w-[56ch] text-muted">
          A mix of development, design and marketing work.
        </p>

        <div className="mb-14 flex flex-wrap gap-3">
          <a href="#development" className={linkClass}>Development</a>
          <a href="#design" className={linkClass}>Design</a>
          <a href="#marketing" className={linkClass}>Marketing</a>
        </div>

        <div className="mb-16">
          <SectionHeading id="development" title="Development" count={development.length} />
          <Grid items={development} />
        </div>

        <div className="mb-16">
          <SectionHeading id="design" title="Design" count={design.length} />
          <Grid items={design} />
        </div>

        <div>
          <SectionHeading id="marketing" title="Marketing" count={marketing.length} />
          <Grid items={marketing} />
        </div>
      </Reveal>
    </section>
  );
}