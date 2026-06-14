import { readFileSync } from "node:fs";
import { join } from "node:path";

let wallpaperPaths: string | undefined;

function getWallpaperPaths() {
  if (!wallpaperPaths) {
    const svg = readFileSync(
      join(process.cwd(), "src/content/assets/svg/wallpaper_svg.svg"),
      "utf8",
    );

    wallpaperPaths = svg
      .replace(/<\?xml[\s\S]*?\?>/, "")
      .replace(/<svg[^>]*>/, "")
      .replace(/<\/svg>\s*$/, "");
  }

  return wallpaperPaths;
}

export function AtlasArtwork() {
  return (
    <svg
      aria-hidden="true"
      className="arcweb-wallpaper fixed inset-0 size-full"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 1672 941"
    >
      <style>
        {`
          .arcweb-wallpaper path {
            fill: var(--map-line);
            transition: fill 220ms ease-out;
          }

          .arcweb-wallpaper path[fill="#031F42"] {
            fill: var(--map-surface);
          }

          .arcweb-wallpaper path[fill="#081D3C"] {
            fill: var(--map-line-soft);
          }
        `}
      </style>
      <g dangerouslySetInnerHTML={{ __html: getWallpaperPaths() }} />
    </svg>
  );
}
