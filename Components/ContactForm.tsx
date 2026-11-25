"use client";
import { useState } from "react";
const ENDPOINT = "/api/contact";

const field =
  "w-full rounded-lg border border-line bg-white/5 px-4 py-3 text-sm outline-none transition placeholder:text-muted focus:border-violet";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    setStatus("sending");
    setErrorMessage("");

    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
      _gotcha: formData.get("_gotcha"),
    };

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const responseBody: unknown = await res.json();
        const message =
          responseBody &&
          typeof responseBody === "object" &&
          "error" in responseBody &&
          typeof responseBody.error === "string"
            ? responseBody.error
            : `Unable to send your message (HTTP ${res.status}). Please email me directly.`;
        setErrorMessage(message);
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("sent");
    } catch {
      setErrorMessage("Could not reach the contact service. Please email me directly.");
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-xl border border-line bg-white/5 p-6">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block font-mono text-xs uppercase tracking-wide text-violet">
            Name
          </label>
          <input id="name" name="name" required placeholder="Your name" className={field} />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block font-mono text-xs uppercase tracking-wide text-violet">
            Email
          </label>
          <input id="email" name="email" type="email" required placeholder="you@example.com" className={field} />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="mb-2 block font-mono text-xs uppercase tracking-wide text-violet">
          Subject
        </label>
        <input id="subject" name="subject" placeholder="Project, job or just hello" className={field} />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block font-mono text-xs uppercase tracking-wide text-violet">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="Tell me about your idea..."
          className={`${field} resize-none`}
        />
      </div>

      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" />

      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-full border-2 border-ink bg-violet px-7 py-3 font-bold text-ink shadow-[4px_4px_0_0_var(--color-amber)] transition hover:-translate-y-1 disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Send message"}
      </button>

      <p role="status" className="min-h-5 text-sm">
        {status === "sent" && <span className="text-mint">Thanks! Your message has been sent.</span>}
        {status === "error" && <span className="text-amber">{errorMessage}</span>}
      </p>
    </form>
  );
}