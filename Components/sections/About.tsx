import Image from "next/image";
import Link from "next/link";
import type { IconType } from "react-icons";
import { FaPython, FaDatabase, FaBullhorn } from "react-icons/fa6";
import { SiDjango, SiGit, SiFigma } from "react-icons/si";
import { MdApi } from "react-icons/md";
import { Reveal } from "@/Components/Ui";
import { styles } from "@/lib/Data";

const experience = [
  {
    title: "Full-Stack Developer (Intern)",
    org: "Uncommon Student",
    Year: "2026",
    points: [
      "Built and maintained REST APIs with Django.",
      "Worked with databases, authentication and deployment.",
    ],
  },
];

const certifications = [
  {
    title: "Software Engineering",
    org: "Coursera",
    Year: "2026",
    points: [
      "Studied software development and engineering fundamentals.",
      "Practised frontend and backend development.",
    ],
  },
  {
    title: "UX/UI Design",
    org: "Excel Design",
    Year: "2026",
    points: ["Learned user-friendly interface design, layout and colour."],
  },
  {
    title: "Digital Marketing",
    org: "Coursera",
    Year: "2026",
    points: ["Explored digital marketing strategies and audience engagement."],
  },
];

const education = [
  {
    title: "Full stack developer",
    org: "Uncommon.org",
    Year: "2026",
    points: [
      "Studying computer science fundamentals, including programming, databases and web development.",
      "Building projects with Python, Django, React and Nest.js.",
      "Learning design and digital marketing alongside my main course.",
    ],
  },
];

const skills: { label: string; Icon: IconType }[] = [
  { label: "Python", Icon: FaPython },
  { label: "Django", Icon: SiDjango },
  { label: "REST APIs", Icon: MdApi },
  { label: "SQL", Icon: FaDatabase },
  { label: "Git", Icon: SiGit },
  { label: "Figma", Icon: SiFigma },
  { label: "Digital Marketing", Icon: FaBullhorn },
];

type Item = { title: string; org: string; Year: string; points: string[] };

function Timeline({ heading, items }: { heading: string; items: Item[] }) {
  return (
    <div className="mb-10">
      <h2 className="mb-5 text-2xl font-extrabold uppercase italic tracking-tight">{heading}</h2>
      <div className="ml-[7px] border-l-2 border-violet">
        {items.map((item) => (
          <div key={item.title} className="relative mb-6 pl-6 last:mb-0">
            <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-violet bg-ink shadow-[0_0_10px_var(--color-violet)]" />
            <h3 className="font-bold">{item.title}</h3>
            <p className="font-mono text-xs uppercase tracking-wide text-violet">
              {item.org} | {item.Year}
            </p>
            {item.points.length > 0 && (
              <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-muted">
                {item.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className={`${styles.section} scroll-mt-24 grid gap-10 md:grid-cols-[0.8fr_1.2fr]`}
    >
      <div className="md:sticky md:top-24 md:self-start">
        <h1 className="text-[clamp(3.5rem,9vw,6rem)] font-black uppercase italic leading-[0.9] tracking-tight">
          About
          <span
            className="block translate-x-6 text-transparent"
            style={{ WebkitTextStroke: "2px var(--color-violet)" }}
          >
            Me
          </span>
        </h1>

        <Image
          src="/coder.png"
          alt="Cartoon developer typing on a laptop"
          width={420}
          height={420}
          priority
          className="mt-8 hidden w-full max-w-[380px] md:block"
        />
      </div>

      <Reveal>
        <div className="mb-10 rounded-xl border border-line bg-white/5 p-5 shadow-[0_0_30px_-10px_var(--color-violet)] backdrop-blur">
          <p className="mb-3 text-sm leading-relaxed">
            Hey, I&rsquo;m <strong>Bibian Dzumbunu</strong>, an aspiring full-stack developer.
          </p>
          <p className="mb-3 text-sm leading-relaxed text-muted">
            I enjoy building with React, Next.js, Django and turning ideas into working products, with a
            creative eye for design and digital marketing.
          </p>
          <p className="text-sm leading-relaxed text-muted">
            When I&rsquo;m not coding, I&rsquo;m probably designing something or exploring a new tool.
          </p>
        </div>

        <Timeline heading="Experience" items={experience} />
        <Timeline heading="Certification" items={certifications} />
        <Timeline heading="Education" items={education} />

        <div className="mb-10">
          <h2 className="mb-4 text-2xl font-extrabold uppercase italic tracking-tight">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map(({ label, Icon }) => (
              <div
                key={label}
                title={label}
                className="group flex h-20 w-20 flex-col items-center justify-center gap-1.5 rounded-xl border border-line bg-white/5 text-white transition hover:-translate-y-1 hover:border-amber hover:text-amber"
              >
                <Icon className="text-2xl" aria-hidden="true" />
                <span className="px-1 text-center font-mono text-[10px] leading-tight text-muted transition-colors group-hover:text-amber">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <a
  href="/Bibian-Dzumbunu-CV.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-full border-2 border-line px-7 py-3 font-bold transition hover:-translate-y-1 hover:border-amber hover:text-amber"
>
  Download CV
</a>
          <Link
            href="#contact"
            className="rounded-full border-2 border-line px-7 py-3 font-bold transition hover:-translate-y-1 hover:border-amber hover:text-amber"
          >
            Get in touch
          </Link>
        </div>
      </Reveal>
    </section>
  );
}