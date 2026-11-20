import type { Metadata } from "next";
import Script from "next/script";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import "./globals.css";

const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

export const metadata: Metadata = {
  title: "Bibian Dzumbunu | Portfolio",
  description: "Bibian Dzumbunu's portfolio in software development, design and digital marketing.",
};

const glyphs = [
  "<div>", "</div>", "{ }", "{", "}", "=", "==", "=>", "</>", "<p>", "<html>", "<body>",
  "()", "[]", "<h1>", "</h1>", "<a>", "const", "def", "&&", "#", "::",
];
const tints = ["text-violet/30", "text-amber/25", "text-mint/25"];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${space.variable} ${mono.variable}`}
    >
      <body className="font-sans leading-relaxed antialiased">
        <Script id="theme-init" strategy="beforeInteractive">
          {`try{var t=localStorage.getItem("theme");if(t)document.documentElement.dataset.theme=t}catch(e){}`}
        </Script>

        <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden opacity-40">
          {glyphs.map((g, i) => (
            <span key={g} className={`absolute top-full font-mono animate-drift ${tints[i % 3]}`}
              style={{ left: `${(i * 37 + 5) % 96}%`, fontSize: 16 + (i % 4) * 8, animationDelay: `${-i * 1.1}s`, animationDuration: `${14 + (i % 5) * 3}s` }}>
              {g}
            </span>
          ))}
        </div>
        <Header />
        <main className="relative z-10 min-h-[70vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}