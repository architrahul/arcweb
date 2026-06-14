import { readFileSync } from "node:fs";
import { join } from "node:path";

let pinPaths: string | undefined;

function getPinPaths() {
  if (!pinPaths) {
    const svg = readFileSync(
      join(process.cwd(), "src/content/assets/svg/pin.svg"),
      "utf8",
    );

    pinPaths = svg
      .replace(/<\?xml[\s\S]*?\?>/, "")
      .replace(/<svg[^>]*>/, "")
      .replace(/<\/svg>\s*$/, "");
  }

  return pinPaths;
}

export function PinIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-full drop-shadow-sm"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 1254 1254"
    >
      <style>
        {`
          .arcweb-pin path {
            fill: var(--pin-line);
            transition: fill 220ms ease-out;
          }

          .arcweb-pin path[fill="#011F48"],
          .arcweb-pin path[fill="#052148"],
          .arcweb-pin path[fill="#072146"],
          .arcweb-pin path[fill="#082349"],
          .arcweb-pin path[fill="#0C2649"] {
            fill: transparent;
          }
        `}
      </style>
      <g className="arcweb-pin" dangerouslySetInnerHTML={{ __html: getPinPaths() }} />
    </svg>
  );
}
