import Image from "next/image";
import type { Certificate } from "@/lib/Certificates";

type Props = { cert: Certificate; index: number };

export default function CertificateCard({ cert, index }: Props) {
  return (
    <article
      className="cert-card group overflow-hidden rounded-xl border border-line bg-white/5 transition duration-300 hover:-translate-y-1.5 hover:border-violet hover:shadow-[0_12px_40px_-12px_var(--color-violet)]"
      style={{ animationDelay: `${index * 120}ms` }}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-line bg-black/20">
        {cert.image ? (
          <Image
            src={cert.image}
            alt={`${cert.title} certificate`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-muted">
            Certificate image coming soon
          </div>
        )}
        <span className="cert-shine pointer-events-none absolute inset-0" aria-hidden="true" />
      </div>

      <div className="p-5">
        <p className="font-mono text-xs text-mint">{cert.date}</p>
        <h2 className="mt-1 text-base font-bold">{cert.title}</h2>
        <p className="mt-1 text-sm text-muted">{cert.issuer}</p>

        {cert.skills && cert.skills.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {cert.skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-line px-3 py-1 text-xs text-muted transition group-hover:border-violet/60"
              >
                {skill}
              </li>
            ))}
          </ul>
        )}

        {cert.link && (
          <a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block text-sm font-bold text-violet underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet"
          >
            View credential
          </a>
        )}
      </div>
    </article>
  );
}