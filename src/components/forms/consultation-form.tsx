import { useState, type FormEvent } from "react";
import { projectTypes, site } from "@/data/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const fieldClass =
  "mt-2 w-full rounded-md border border-ink-200 bg-ink-50 px-3 py-2.5 text-ink-900 outline-none transition-colors duration-150 placeholder:text-ink-400 focus:border-almond-600";

export function ConsultationForm({ tone = "light" }: { tone?: "light" | "dark" }) {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [error, setError] = useState<string | null>(null);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setError("Name, email, and a short project description are required.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError(null);
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div
        className={cn(
          "border p-8",
          tone === "light"
            ? "border-ink-200 bg-ink-50 text-ink-900"
            : "border-ink-100/15 bg-ink-900 text-ink-50",
        )}
      >
        <p className="eyebrow text-almond-600">Request prepared</p>
        <h3 className="mt-4 text-2xl">Thank you. Your details are ready to send.</h3>
        <p
          className={cn(
            "mt-4 text-sm leading-relaxed",
            tone === "light" ? "text-ink-700" : "text-ink-300",
          )}
        >
          A form endpoint has not been connected yet. Please email{" "}
          <a href={`mailto:${site.email}`} className="underline underline-offset-4">
            {site.email}
          </a>{" "}
          or call {site.phone} with the same information. Nothing has been stored
          on a server.
        </p>
      </div>
    );
  }

  const labelClass = tone === "light" ? "text-ink-800" : "text-ink-200";

  return (
    <form
      onSubmit={onSubmit}
      action={`mailto:${site.email}`}
      method="post"
      encType="text/plain"
      className="grid gap-5"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className={cn("text-sm", labelClass)}>
          Name
          <input name="name" autoComplete="name" required className={fieldClass} />
        </label>
        <label className={cn("text-sm", labelClass)}>
          Company / Organization
          <input name="company" autoComplete="organization" className={fieldClass} />
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className={cn("text-sm", labelClass)}>
          Email
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            className={fieldClass}
          />
        </label>
        <label className={cn("text-sm", labelClass)}>
          Phone
          <input name="phone" type="tel" autoComplete="tel" className={fieldClass} />
        </label>
      </div>
      <label className={cn("text-sm", labelClass)}>
        Project Type
        <select name="projectType" className={fieldClass} defaultValue="">
          <option value="" disabled>
            Select a category
          </option>
          {projectTypes.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>
      <label className={cn("text-sm", labelClass)}>
        Message
        <textarea name="message" rows={6} required className={cn(fieldClass, "resize-y")} />
      </label>
      {error ? (
        <p role="alert" className="text-sm text-almond-800">
          {error}
        </p>
      ) : null}
      <div>
        <Button type="submit">Request a Consultation</Button>
      </div>
    </form>
  );
}
