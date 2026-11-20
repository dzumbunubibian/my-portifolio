import ContactForm from "@/Components/ContactForm";
import { Reveal } from "@/Components/Ui";
import { styles } from "@/lib/Data";

export const metadata = { title: "Contact | Bibian Dzumbunu" };

const details = [
  { label: "Email", value: "dzumbunubibian@gmail.com", href: "mailto:dzumbunubibian@gmail.com" },
  { label: "WhatsApp", value: "+263 77 191 3290", href: "https://wa.me/+263771913290" },
  { label: "LinkedIn", value: "https://www.linkedin.com/in/bibian-dzumbunu-399722406/", href: "https://linkedin.com/in/bibian-dzumbunu-399722406/" },
  { label: "GitHub", value: "github.com/bibian-dzumbunu", href: "https://github.com/dashboard" },
];

export default function Contact() {
  return (
    <section
    id="contact"
    className={styles.section}>
      <Reveal>
        <h1 className="mb-3 text-[clamp(2.4rem,6vw,4.2rem)] font-black uppercase italic leading-[0.95] tracking-tight">
          Get in
          <span className="ml-3 text-transparent" style={{ WebkitTextStroke: "2px var(--color-violet)" }}>
            Touch
          </span>
        </h1>
        <p className="mb-3 max-w-[56ch] text-lg font-medium">Have a project or an idea? Let&rsquo;s talk.</p>
        <p className="mb-12 max-w-[56ch] text-muted">
          I&rsquo;m open to internships, freelance work and collaborations in development, design and
          marketing. I usually reply within a day or two.
        </p>

        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
          <ul className="space-y-4">
            {details.map((d) => (
              <li key={d.label}>
                <a
                  href={d.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-xl border border-line bg-white/5 p-4 transition hover:-translate-y-1 hover:border-violet"
                >
                  <span className="block font-mono text-xs uppercase tracking-wide text-violet">{d.label}</span>
                  <span className="mt-1 block text-sm font-medium">{d.value}</span>
                </a>
              </li>
            ))}
          </ul>

          <ContactForm />
        </div>
      </Reveal>
    </section>
  );
}