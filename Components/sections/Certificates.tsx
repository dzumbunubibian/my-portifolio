import { Reveal } from "@/Components/Ui";
import CertificateCard from "@/Components/CertificateCard";
import { certificates, type Category } from "@/lib/Certificates";
import { styles } from "@/lib/Data";

const categories: { name: Category; accent: string }[] = [
  { name: "Software", accent: "text-amber" },
  { name: "Marketing", accent: "text-violet" },
  { name: "Design", accent: "text-mint" },
];

export default function Certificates() {
  const groups = categories
    .map((cat) => ({
      ...cat,
      items: certificates.filter((c) => c.category === cat.name),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <section id="certificates" className={styles.section}>
      <Reveal>
        <h1 className="mb-3 text-[clamp(2.4rem,6vw,4.2rem)] font-black uppercase italic leading-[0.95] tracking-tight">
          My
          <span
            className="ml-3 text-transparent"
            style={{ WebkitTextStroke: "2px var(--color-violet)" }}
          >
            Certificates
          </span>
        </h1>
        <p className="mb-3 max-w-[56ch] text-lg font-medium">
          Proof of the work I&rsquo;ve put in.
        </p>
        <p className="mb-12 max-w-[56ch] text-muted">
          Courses and programs I&rsquo;ve completed, grouped by field. Open any certificate to
          see the full credential.
        </p>

        {groups.length === 0 ? (
          <div className="rounded-xl border border-dashed border-line bg-white/5 p-10 text-center">
            <p className="font-bold">No certificates yet</p>
            <p className="mt-1 text-sm text-muted">
              Add your first one in <code>lib/certificates.ts</code>.
            </p>
          </div>
        ) : (
          <div className="space-y-14">
            {groups.map((group) => (
              <div key={group.name}>
                <h2
                  className={`mb-5 font-mono text-xs uppercase tracking-wide ${group.accent}`}
                >
                  {group.name} · {group.items.length}
                </h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {group.items.map((cert, i) => (
                    <CertificateCard key={cert.title} cert={cert} index={i} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </Reveal>
    </section>
  );
}