import Hero from "@/Components/sections/Hero";
import About from "@/Components/sections/About";
import Projects from "@/Components/sections/Projects";
import Skills from "@/Components/sections/Skills";
import Certificates from "@/Components/sections/Certificates";
import Contact from "@/Components/sections/Contact";

export const metadata = { title: "Bibian Dzumbunu | Full-Stack Developer" };

export default function Page() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Certificates />
      <Contact />
    </>
  );
}