"use client";
import Link from "next/link";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const pages = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Certificates", href: "/#certificates" },
  { label: "Contact", href: "/#contact" },
];

const wave = {
  hover: (i: number) => ({
    y: [0, -8, 0],
    transition: { duration: 0.45, delay: i * 0.04 },
  }),
};

function WaveText({ text }: { text: string }) {
  return (
    <>
      {text.split("").map((c, i) => (
        <motion.span key={i} custom={i} variants={wave} className="inline-block">
          {c}
        </motion.span>
      ))}
    </>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState<string | null>(null);
  const [current, setCurrent] = useState("home");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });

  useEffect(() => {
    const ids = pages.map((p) => p.href.split("#")[1]);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setCurrent(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 14 }}
      className="sticky top-0 z-50 border-b border-line bg-ink/80 backdrop-blur-md"
    >
      <motion.div
        style={{ scaleX }}
        className="absolute left-0 top-0 h-[3px] w-full origin-left bg-gradient-to-r from-violet to-amber"
      />

      <motion.div
        className="absolute bottom-0 left-0 h-[2px] w-full"
        style={{
          backgroundImage: "linear-gradient(90deg,#8b7cff,#ffb454,#6ee7b7,#8b7cff)",
          backgroundSize: "200% 100%",
        }}
        animate={{ backgroundPosition: ["0% 0%", "200% 0%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />

      <div className="mx-auto flex items-center justify-between px-[6vw] py-3">
        <Link href="/#home" className="flex text-2xl font-bold">
          <motion.span
            className="inline-block"
            whileHover={{ rotate: [0, -8, 8, -4, 0], scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            Bibian
          </motion.span>
          <motion.span
            className="inline-block text-amber"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          >
            .
          </motion.span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" onMouseLeave={() => setHover(null)}>
          {pages.map((l, i) => {
            const active = current === l.href.split("#")[1];
            return (
              <motion.div
                key={l.href}
                className="relative"
                initial={{ opacity: 0, y: -24, scale: 0.6 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.3 + i * 0.09, type: "spring", stiffness: 350, damping: 12 }}
                whileHover="hover"
                whileTap={{ scale: 0.9 }}
                onMouseEnter={() => setHover(l.href)}
              >
                {hover === l.href && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-violet/30 shadow-[0_0_22px_rgba(139,124,255,.55)]"
                    transition={{ type: "spring", stiffness: 380, damping: 26 }}
                  />
                )}
                <Link
                  href={l.href}
                  className={`relative block px-4 py-2 text-sm font-medium transition-colors ${
                    active ? "text-amber" : "text-muted hover:text-text"
                  }`}
                >
                  <WaveText text={l.label} />
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-4 bottom-0.5 h-0.5 rounded bg-amber shadow-[0_0_10px_var(--color-amber)]"
                      transition={{ type: "spring", stiffness: 380, damping: 26 }}
                    />
                  )}
                </Link>
              </motion.div>
            );
          })}
        </nav>

        <motion.button
          whileTap={{ scale: 0.8, rotate: 90 }}
          className="rounded-md border border-line px-3 py-1 text-xl md:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </motion.button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-line bg-ink md:hidden"
          >
            {pages.map((l, i) => (
              <motion.div
                key={l.href}
                initial={{ x: -40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.05 + i * 0.06, type: "spring", stiffness: 300, damping: 18 }}
              >
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`block px-[6vw] py-4 ${
                    current === l.href.split("#")[1] ? "text-amber" : "text-muted"
                  }`}
                >
                  {l.label}
                </Link>
              </motion.div>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}