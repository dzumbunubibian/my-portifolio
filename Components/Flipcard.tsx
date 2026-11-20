"use client";
import Image from "next/image";
import { useState } from "react";

type Props = { title: string; description?: string; image: string; link?: string };

export default function FlipCard({ title, description, image, link }: Props) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="group aspect-square cursor-pointer [perspective:1000px]"
      onClick={() => setFlipped((f) => !f)}
    >
      <div
        className={`relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] md:group-hover:[transform:rotateY(180deg)] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        <div className="absolute inset-0 overflow-hidden rounded-xl border border-line [backface-visibility:hidden]">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(min-width: 768px) 33vw, 50vw"
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-xl border border-violet bg-ink p-5 text-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <h3 className="text-lg font-bold">{title}</h3>
          {description && <p className="text-sm text-muted">{description}</p>}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="rounded-full border-2 border-violet px-5 py-2 font-mono text-xs transition hover:border-amber hover:text-amber"
            >
              View project
            </a>
          )}
        </div>
      </div>
    </div>
  );
}