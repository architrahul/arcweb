export function AtlasArtwork() {
  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 size-full"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 1600 900"
    >
      <rect fill="var(--map-surface)" height="900" width="1600" />

      <g
        fill="none"
        stroke="var(--map-line-soft)"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M0 650c170-45 255-17 356-72 100-55 146-150 254-144 126 8 154 153 292 170 162 20 247-160 404-128 110 23 138 122 294 96"
          strokeWidth="4"
        />
        <path
          d="M146 185c100-91 258-116 379-61 96 44 109 129 205 156 152 43 244-130 426-69 128 43 225 166 219 300-7 154-151 258-295 272-112 11-175-35-268-20-112 18-139 95-264 103-138 9-279-70-352-181-89-137-70-326 50-445z"
          strokeWidth="5"
        />
        <path
          d="M238 258c72-54 156-77 244-57 93 21 127 91 211 107 118 22 202-65 324-31 85 24 158 104 160 193 3 117-116 202-233 206-85 3-137-34-211-19-83 16-109 73-198 71-103-2-201-72-248-156-58-104-45-228 65-322"
          strokeWidth="2"
        />
      </g>

      <g
        fill="none"
        stroke="var(--map-line)"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M322 532c95-46 180-45 253 8 65 47 110 54 184 18 70-34 140-24 212 30"
          strokeDasharray="12 12"
          strokeWidth="3"
        />
        <path
          d="M555 262c39 44 88 72 146 85 64 14 123 1 178-30"
          strokeWidth="4"
        />
        <path
          d="M610 438c52-21 105-18 158 9 63 31 121 33 176 7"
          strokeWidth="2"
        />
        <path
          d="M210 710c72-36 133-36 183 0 53 39 112 39 177 0"
          strokeWidth="2"
        />
        <path d="M88 104h275M88 124h205M1300 758h196M1360 786h136" strokeWidth="2" />
      </g>

      <g
        fill="none"
        stroke="var(--map-line)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      >
        <path d="M1145 260l28-52 31 55" />
        <path d="M1190 274l35-64 38 66" />
        <path d="M1240 292l24-42 27 44" />
        <path d="M430 208l20-34 22 36" />
        <path d="M467 221l27-48 29 50" />
        <path d="M505 236l18-30 20 32" />
      </g>

      <g fill="var(--map-line)" opacity="0.65">
        <circle cx="300" cy="320" r="4" />
        <circle cx="365" cy="292" r="3" />
        <circle cx="820" cy="278" r="4" />
        <circle cx="1020" cy="430" r="4" />
        <circle cx="655" cy="660" r="3" />
        <circle cx="1230" cy="552" r="3" />
      </g>

      <g
        fill="none"
        opacity="0.42"
        stroke="var(--map-line-soft)"
        strokeLinecap="round"
        strokeWidth="2"
      >
        <path d="M155 393c32-19 61-19 87 0" />
        <path d="M178 414c42-25 81-25 117 0" />
        <path d="M1115 634c42-24 82-24 120 0" />
        <path d="M1164 660c28-16 54-16 78 0" />
      </g>
    </svg>
  );
}
