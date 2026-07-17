export function PinIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-full overflow-visible drop-shadow-[0_5px_10px_rgba(0,0,0,0.28)]"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 64 76"
    >
      <path
        className="opacity-30 transition group-hover:opacity-45 group-focus:opacity-45"
        d="M32 72c13.8 0 25-3.1 25-7s-11.2-7-25-7S7 61.1 7 65s11.2 7 25 7Z"
        fill="var(--foreground)"
      />
      <path
        className="transition group-hover:scale-105 group-focus:scale-105"
        d="M32 4C18.2 4 7 15.2 7 29c0 18.9 25 39 25 39s25-20.1 25-39C57 15.2 45.8 4 32 4Z"
        fill="var(--accent-strong)"
        stroke="var(--background)"
        strokeLinejoin="round"
        strokeWidth="5"
      />
      <circle
        cx="32"
        cy="29"
        fill="var(--background)"
        r="10"
        stroke="var(--foreground)"
        strokeOpacity="0.32"
        strokeWidth="2"
      />
      <circle cx="32" cy="29" fill="var(--accent)" r="4" />
    </svg>
  );
}
