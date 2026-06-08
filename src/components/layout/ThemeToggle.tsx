"use client";

import { useEffect, useSyncExternalStore } from "react";

type ThemeMode = "system" | "light" | "dark";

const modes: ThemeMode[] = ["system", "light", "dark"];

const labels: Record<ThemeMode, string> = {
  system: "System",
  light: "Light",
  dark: "Dark",
};

function getStoredMode(): ThemeMode {
  const stored = window.localStorage.getItem("arcweb-theme");
  return stored === "light" || stored === "dark" || stored === "system"
    ? stored
    : "system";
}

function subscribeThemeMode(callback: () => void) {
  const sync = () => callback();

  window.addEventListener("storage", sync);
  window.addEventListener("arcweb-theme-change", sync);

  return () => {
    window.removeEventListener("storage", sync);
    window.removeEventListener("arcweb-theme-change", sync);
  };
}

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
  const mode = useSyncExternalStore(
    subscribeThemeMode,
    getStoredMode,
    (): ThemeMode => "system",
  );

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const syncSystemTheme = () => {
      if (getStoredMode() === "system") {
        applyTheme("system");
      }
    };

    media.addEventListener("change", syncSystemTheme);
    return () => media.removeEventListener("change", syncSystemTheme);
  }, []);

  function cycleMode() {
    const nextMode = modes[(modes.indexOf(mode) + 1) % modes.length];
    window.localStorage.setItem("arcweb-theme", nextMode);
    applyTheme(nextMode);
    window.dispatchEvent(new Event("arcweb-theme-change"));
  }

  return (
    <button
      aria-label={`Theme mode: ${labels[mode]}. Activate to switch theme mode.`}
      className="inline-flex w-20 shrink-0 items-center justify-center border-b border-transparent pb-1 text-sm leading-normal text-[var(--ink-muted)] transition duration-300 ease-out hover:border-current hover:text-[var(--foreground)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-strong)]"
      onClick={cycleMode}
      title={`Theme: ${labels[mode]}`}
      type="button"
    >
      {labels[mode]}
    </button>
  );
}
