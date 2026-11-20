"use client";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";

export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

// Cartoon "sticker" card: hard shadow + springy wobble on hover
export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.article
      whileHover={{ y: -8, rotate: -1.2 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
      className={`flex flex-col gap-3 rounded-2xl border-2 border-line bg-panel p-6 shadow-[5px_5px_0_0_var(--color-violet)] hover:border-amber hover:shadow-[7px_7px_0_0_var(--color-amber)] ${className}`}
    >
      {children}
    </motion.article>
  );
}

export function Bar({ value }: { value: number }) {
  return (
    <div className="mt-auto h-3 overflow-hidden rounded-full bg-line">
      <motion.div
        className="h-full rounded-full bg-gradient-to-r from-violet to-amber"
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
    </div>
  );
}

export function Typed({ words }: { words: string[] }) {
  const reduce = useReducedMotion();
  const [text, setText] = useState(words[0]);
  const key = words.join("|");

  useEffect(() => {
    if (reduce) return;
    let w = 0, i = 0, del = false;
    let t: ReturnType<typeof setTimeout>;
    const tick = () => {
      const word = words[w];
      setText(word.slice(0, i));
      let wait = del ? 40 : 85;
      if (!del && i === word.length) { del = true; wait = 1800; }
      else if (del && i === 0) { del = false; w = (w + 1) % words.length; wait = 400; }
      i += del ? -1 : 1;
      t = setTimeout(tick, wait);
    };
    tick();
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduce, key]);

  return (
    <span className="text-amber">
      {text}
      <i className="ml-1 inline-block h-[0.9em] w-[0.08em] translate-y-[0.1em] bg-amber animate-blink" />
    </span>
  );
}