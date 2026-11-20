"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaLinkedinIn, FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { pages } from "@/lib/links";

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/bibian-dzumbunu-399722406/",
    Icon: FaLinkedinIn,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/dzumbunubibian/",
    Icon: FaFacebookF,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/YOUR_HANDLE",
    Icon: FaXTwitter,
  },
  {
    label: "Email",
    href: "mailto:dzumbunubibian@gmail.com",
    Icon: SiGmail,
  },
];

export default function Footer() {
  const [year, setYear] = useState("");
  useEffect(() => setYear(String(new Date().getFullYear())), []);

  return (
    <footer className="relative z-10 bg-ink">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet/60 to-transparent"
      />

      <div className="mx-auto grid max-w-[1250px] gap-10 px-[6vw] py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link href="/" className="text-2xl font-bold">
            Bibian<span className="text-amber">.</span>
          </Link>
          <p className="mt-3 max-w-[34ch] text-sm text-muted">
            Building skills. Creating solutions. Growing every day.
          </p>
          <p className="mt-4 font-mono text-sm text-mint">&lt;Developer /&gt;</p>
        </div>

        <div>
          <h3 className="mb-4 font-bold">Pages</h3>
          <ul className="grid gap-2 text-sm text-muted">
            {pages.map((p) => (
              <li key={p.href}>
                <motion.span
                  className="inline-block"
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <Link href={p.href} className="transition-colors hover:text-amber">
                    {p.label}
                  </Link>
                </motion.span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-bold">Connect</h3>
          <div className="flex flex-wrap gap-3">
            {socials.map(({ label, href, Icon }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                whileHover={{ y: -4, rotate: -6 }}
                whileTap={{ scale: 0.92 }}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/5 text-lg text-white transition-colors hover:border-amber hover:text-amber"
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="mx-auto h-px max-w-[1250px] bg-gradient-to-r from-transparent via-line to-transparent"
      />

      <div className="mx-auto flex max-w-[1250px] items-center justify-between gap-4 px-[6vw] py-5 text-sm text-muted">
        <p>© {year} Bibian Dzumbunu</p>
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.9 }}
          className="rounded-full border border-line px-4 py-2 transition-colors hover:border-amber hover:text-amber"
          aria-label="Back to top"
        >
          Back to top ↑
        </motion.button>
      </div>
    </footer>
  );
}