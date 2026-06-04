"use client";

import { useEffect, useState } from "react";
import { cx } from "@/lib/utils";

type ThemeMode = "system" | "light" | "dark";

const modes: Array<{ label: string; value: ThemeMode }> = [
  { label: "System", value: "system" },
  { label: "Light", value: "light" },
  { label: "Dark", value: "dark" },
];

function resolveTheme(mode: ThemeMode) {
  if (mode !== "system") {
    return mode;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(mode: ThemeMode) {
  const resolved = resolveTheme(mode);
  document.documentElement.dataset.theme = resolved;
  document.documentElement.dataset.themeMode = mode;
  document.documentElement.style.colorScheme = resolved;
}

export function ThemeToggle() {
  const [mode, setMode] = useState<ThemeMode>(() => {
    if (typeof window === "undefined") {
      return "system";
    }

    const stored = window.localStorage.getItem("arcweb-theme");
    return stored === "light" || stored === "dark" || stored === "system"
      ? stored
      : "system";
  });

  useEffect(() => {
    applyTheme(mode);

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const syncSystemTheme = () => {
      if (mode === "system") {
        applyTheme("system");
      }
    };

    media.addEventListener("change", syncSystemTheme);
    return () => media.removeEventListener("change", syncSystemTheme);
  }, [mode]);

  function chooseMode(nextMode: ThemeMode) {
    window.localStorage.setItem("arcweb-theme", nextMode);
    setMode(nextMode);
    applyTheme(nextMode);
  }

  return (
    <div
      aria-label="Theme mode"
      className="flex rounded border border-[var(--line)] bg-[var(--control-bg)] p-0.5 text-xs"
      role="group"
    >
      {modes.map((item) => (
        <button
          aria-pressed={mode === item.value}
          className={cx(
            "rounded-sm px-2.5 py-1.5 text-[var(--ink-muted)] transition duration-300 ease-out hover:text-[var(--foreground)]",
            mode === item.value && "bg-[var(--control-active)] text-[var(--foreground)] shadow-sm",
          )}
          key={item.value}
          onClick={() => chooseMode(item.value)}
          type="button"
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
