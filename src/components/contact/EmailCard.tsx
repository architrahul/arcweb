"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";

const email = "architpatil@utexas.edu";
const mailHref = `mailto:${email}?subject=Hello%20Archit`;
const gmailHref =
  "https://mail.google.com/mail/?view=cm&fs=1&to=architpatil@utexas.edu&su=Hello%20Archit";

export function EmailCard() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <Card>
      <p className="text-xs font-semibold uppercase text-[var(--accent-strong)]">
        Email
      </p>
      <a
        className="mt-2 block break-words text-base font-semibold text-[var(--foreground)] transition hover:text-[var(--accent-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent-strong)]"
        href={mailHref}
      >
        {email}
      </a>
      <div className="mt-4 grid gap-2 sm:flex sm:flex-wrap">
        <a
          className="rounded border border-[var(--accent-strong)] bg-[color-mix(in_srgb,var(--accent-strong)_12%,var(--panel))] px-3 py-2 text-center text-sm font-medium text-[var(--accent-strong)] transition hover:bg-[var(--accent-strong)] hover:text-[var(--background)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent-strong)]"
          href={gmailHref}
          rel="noreferrer"
          target="_blank"
        >
          Open in Gmail
        </a>
        <a
          className="rounded border border-[var(--line)] bg-[var(--control-bg)] px-3 py-2 text-center text-sm font-medium text-[var(--foreground)] transition hover:border-[var(--accent-strong)] hover:bg-[var(--control-active)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent-strong)]"
          href={mailHref}
        >
          Open mail app
        </a>
        <button
          className="rounded border border-[var(--line)] bg-[var(--control-bg)] px-3 py-2 text-sm font-medium text-[var(--foreground)] transition hover:border-[var(--accent-strong)] hover:bg-[var(--control-active)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent-strong)]"
          onClick={copyEmail}
          type="button"
        >
          {copied ? "Copied" : "Copy address"}
        </button>
      </div>
    </Card>
  );
}
