import { Card } from "@/components/ui/Card";

const email = "architpatil@utexas.edu";
const gmailHref =
  "https://mail.google.com/mail/?view=cm&fs=1&to=architpatil@utexas.edu&su=Hello%20Archit";

export function EmailCard() {
  return (
    <Card>
      <p className="text-xs font-semibold uppercase text-[var(--accent-strong)]">
        Email
      </p>
      <a
        className="mt-2 block break-words text-base font-semibold text-[var(--foreground)] transition hover:text-[var(--accent-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent-strong)]"
        href={gmailHref}
        rel="noreferrer"
        target="_blank"
      >
        {email}
      </a>
    </Card>
  );
}
