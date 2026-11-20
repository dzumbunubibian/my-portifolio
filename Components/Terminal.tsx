"use client";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type Tok = [cls: string, text: string];

const colour: Record<string, string> = {
  k: "text-violet",
  s: "text-mint",
  f: "text-amber",
  c: "italic text-[#6b7599]",
  "": "",
};

const lines: Tok[][] = [
  [["c", "# bibian.py"]],
  [["k", "class "], ["f", "Developer"], ["", ":"]],
  [["", "    name = "], ["s", '"Bibian Dzumbunu"']],
  [["", "    role = "], ["s", '"full-stack developer"']],
  [["", "    stack = ["], ["s", '"Python"'], ["", ", "], ["s", '"Django"'], ["", ","]],
  [["", "             "], ["s", '"JavaScript"'], ["", ", "], ["s", '"Git"'], ["", "]"]],
  [["", "    also = ["], ["s", '"Design"'], ["", ", "], ["s", '"Marketing"'], ["", "]"]],
  [["", ""]],
  [["", "    "], ["k", "def "], ["f", "build"], ["", "(self, idea):"]],
  [["", "        "], ["k", "return "], ["", "self.think(idea) \\"]],
  [["", "               .design().code().ship()"]],
  [["", ""]],
  [["f", "Developer"], ["", "().build("], ["s", '"your next idea"'], ["", ")"]],
  [["c", ">>> Shipped. Always learning."]],
];

const total = lines.reduce((sum, l) => sum + l.reduce((s, [, t]) => s + t.length, 0) + 1, 0);

export default function Terminal() {
  const reduce = useReducedMotion();
  const [n, setN] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const done = reduce || n >= total;

  useEffect(() => {
    if (reduce) return;
    let timer: ReturnType<typeof setInterval>;
    const start = setTimeout(() => {
      timer = setInterval(() => setN((v) => (v >= total ? v : v + 2)), 22);
    }, 600);
    return () => { clearTimeout(start); clearInterval(timer); };
  }, [reduce]);

  let left = reduce ? total : n;

  return (
    <div
      className="relative [perspective:900px]"
      onMouseMove={(e) => {
        if (reduce) return;
        const r = e.currentTarget.getBoundingClientRect();
        setTilt({ x: (e.clientX - r.left) / r.width - 0.5, y: (e.clientY - r.top) / r.height - 0.5 });
      }}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0, rotateY: tilt.x * 10, rotateX: -tilt.y * 10 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden rounded-2xl border border-line bg-panel shadow-[0_30px_70px_-25px_rgba(139,124,255,.45)]"
      >
        <div className="flex items-center gap-2 border-b border-line bg-white/[0.03] px-4 py-3">
          <i className="h-3 w-3 rounded-full bg-rose" />
          <i className="h-3 w-3 rounded-full bg-amber" />
          <i className="h-3 w-3 rounded-full bg-mint" />
          <span className="ml-auto font-mono text-xs text-muted">bibian.py</span>
        </div>

        <pre className="min-h-[340px] overflow-x-auto p-5 font-mono text-sm leading-7" aria-label="Python code describing Bibian as a developer">
          {lines.map((line, i) => {
            const spans = line.map(([c, t], j) => {
              const part = t.slice(0, Math.max(left, 0));
              left -= t.length;
              return <span key={j} className={colour[c]}>{part}</span>;
            });
            left -= 1;
            return <div key={i} className="min-h-[1.75rem]">{spans}</div>;
          })}
          {!done && <i className="inline-block h-4 w-[2px] bg-amber animate-blink" />}
        </pre>
      </motion.div>

      <motion.div
        animate={reduce ? undefined : { y: [0, -12, 0], rotate: [0, -3, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-4 -right-2 rounded-full bg-amber px-4 py-2 text-sm font-bold text-ink"
      >
        Always learning 
      </motion.div>
    </div>
  );
}