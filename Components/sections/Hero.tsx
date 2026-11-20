import Link from "next/link";
import Terminal from "@/Components/Terminal";
import { Typed } from "@/Components/Ui";

const words = ["digital solutions.", "Django apps.", "clean interfaces.", "working products."];

export default function Home() {
  return (
    <section
    id="home"
    className="mx-auto grid min-h-[calc(100vh-140px)] max-w-[1250px] items-center gap-10 px-[6vw] py-12 md:grid-cols-[1.1fr_.9fr]">
      <div>
        <p className="mb-4 font-mono text-sm text-violet">Development, design and marketing</p>
        <h1 className="mb-6 min-h-[2.2em] text-[clamp(2.4rem,5vw,4.2rem)] font-bold leading-[1.08] tracking-tight">
          Turning ideas into <Typed words={words} />
        </h1>
        <p className="mb-8 max-w-[52ch] text-lg text-muted">
          I&rsquo;m Bibian Dzumbunu, an aspiring backend developer with interests in creative design,
          digital marketing and building useful digital experiences.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/projects" className="rounded-full border-2 border-ink bg-violet px-7 py-3 font-bold text-ink shadow-[4px_4px_0_0_var(--color-amber)] transition hover:-translate-y-1 hover:shadow-[6px_6px_0_0_var(--color-amber)] active:translate-x-1 active:translate-y-1 active:shadow-none">
            Explore my work
          </Link>
         <a
  href="https://canva.link/5cgl305y0gj2k5n"
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-full border-2 border-line px-7 py-3 font-bold transition hover:-translate-y-1 hover:border-amber hover:text-amber"
>
  View CV
</a>
        </div>
      </div>
      <Terminal />
    </section>
  );
}