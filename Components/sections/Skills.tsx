import Link from "next/link";
import { Reveal } from "@/Components/Ui";
import { styles } from "@/lib/Data";

type Skill = { name: string; level: 1 | 2 | 3 | 4 | 5 };
type Category = { title: string; blurb: string; skills: Skill[] };

const levels = ["Learning", "Beginner", "Comfortable", "Proficient", "Advanced"];

const categories: Category[] = [
  {
    title: "Development",
    blurb: "Frontend and backend web development.",
    skills: [
      { name: "React ", level: 3 },
      { name: "Nest.js", level: 3 },
      { name: "Python", level: 3 },
      { name: "Django", level: 3 },
      { name: "HTML/CSS", level: 3 },
      { name: "JavaScript", level: 2 },
      { name: "Tailwind CSS", level: 4 },
    ],
  },
  {
    title: "Design",
    blurb: "Interfaces and visual communication.",
    skills: [
      { name: "UI Design", level: 3 },
      { name: "Figma", level: 3 },
      { name: "Canva", level: 4 },
      { name: "Branding & Logos", level: 3 },
    ],
  },
  {
    title: "Marketing",
    blurb: "Reaching and growing an audience.",
    skills: [
      { name: "Social Media Strategy", level: 3 },
      { name: "Content Creation", level: 3 },
      { name: "Copywriting", level: 3 },
      { name: "Email Marketing", level: 2 },
    ],
  },
  {
    title: "Tools",
    blurb: "What I use day to day.",
    skills: [
      { name: "Git & GitHub", level: 3 },
      { name: "VS Code", level: 4 },
      { name: "Postman", level: 3 },
      { name: "Linux / Terminal", level: 2 },
    ],
  },
];

function Level({ value }: { value: number }) {
  return (
    <div className="flex gap-1" role="img" aria-label={`${levels[value - 1]}, ${value} out of 5`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <span key={n} className={`h-1.5 w-5 rounded-full ${n <= value ? "bg-violet" : "bg-line"}`} />
      ))}
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className={`${styles.section} scroll-mt-24`}>
      <Reveal>
        <h2 className="mb-3 text-[clamp(2.4rem,6vw,4.2rem)] font-black uppercase italic leading-[0.95] tracking-tight">
          My
          <span className="ml-3 text-transparent" style={{ WebkitTextStroke: "2px var(--color-violet)" }}>
            Skills
          </span>
        </h2>
        <p className="mb-3 max-w-[56ch] text-lg font-medium">
          I like turning ideas into things that work and look good.
        </p>
        <p className="mb-8 max-w-[56ch] text-muted">
          I move between code, design and marketing, so I can build a product, make it look right and
          help people find it. Still learning every day, and enjoying it.
        </p>

        <div className="mb-10 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-muted">
          {levels.map((label, i) => (
            <div key={label} className="flex items-center gap-2">
              <span className="text-violet">{i + 1}</span>
              <span>{label}</span>
            </div>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {categories.map((cat) => (
            <article
              key={cat.title}
              className="rounded-xl border border-line bg-white/5 p-6 transition hover:-translate-y-1 hover:border-violet"
            >
              <div className="mb-5 flex items-end justify-between border-b border-line pb-3">
                <div>
                  <h3 className="text-xl font-extrabold uppercase italic tracking-tight">{cat.title}</h3>
                  <p className="mt-1 text-sm text-muted">{cat.blurb}</p>
                </div>
                <span className="font-mono text-xs text-violet">{cat.skills.length}</span>
              </div>

              <ul className="space-y-3">
                {cat.skills.map((s) => (
                  <li key={s.name} className="flex items-center justify-between gap-4">
                    <span className="text-sm font-medium">{s.name}</span>
                    <Level value={s.level} />
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <Link
          href="#learning"
          className="mt-10 inline-block rounded-full border border-line px-5 py-2 font-mono text-xs transition hover:border-amber hover:text-amber"
        >
          See what I&rsquo;m learning
        </Link>
      </Reveal>
    </section>
  );
}