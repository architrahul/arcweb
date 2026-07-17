import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { SiteShell } from "@/components/layout/SiteShell";

export const metadata: Metadata = {
  title: "Arcweb",
  description: "A research portfolio organized as an interactive atlas.",
  icons: {
    icon: "/logo-circle.png",
    shortcut: "/logo-circle.png",
    apple: "/logo-circle.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const themeScript = `
(() => {
  try {
    const stored = localStorage.getItem("arcweb-theme") || "system";
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const resolved = stored === "system" ? (prefersDark ? "dark" : "light") : stored;
    document.documentElement.dataset.theme = resolved;
    document.documentElement.dataset.themeMode = stored;
    document.documentElement.style.colorScheme = resolved;
  } catch {
    document.documentElement.dataset.theme = "light";
    document.documentElement.dataset.themeMode = "system";
    document.documentElement.style.colorScheme = "light";
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Script
          id="arcweb-theme"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: themeScript }}
        />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
