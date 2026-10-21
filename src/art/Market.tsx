/**
 * Market illustrations, flat vector in the brand palette. Drawn for Totely (Kaduna market life):
 * woven basket with yam, tomatoes, tatashe and a paint bucket of garri; supermarket bag; a plate of jollof.
 */

const INK = '#14213D';

export function Yam({ x, y, r = 0, tone = '#8A5A3B' }: { x: number; y: number; r?: number; tone?: string }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${r})`}>
      <path d="M0 0c14-6 46-8 62 2 7 5 4 13-6 15-20 4-44 3-56-3-6-3-6-11 0-14z" fill={tone} stroke="#5A3420" strokeWidth="1.5" />
      <path d="M8 4c6 1 9 4 9 4M26 3c4 2 6 6 6 6M44 4c3 2 5 5 5 5" stroke="#6B4029" strokeWidth="2" strokeLinecap="round" fill="none" />
      <ellipse cx="63" cy="8" rx="4" ry="6" fill="#F3E3C3" />
    </g>
  );
}

export function Tomato({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <circle r="13" fill="#E0442E" />
      <ellipse cx="-4" cy="-4" rx="4" ry="3" fill="#F07A64" />
      <path d="M-6-12l6 3 6-3-3 5h-6z" fill="#1E8E5A" />
    </g>
  );
}

export function Onion({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <path d="M0-14c6 6 12 10 12 17a12 12 0 0 1-24 0c0-7 6-11 12-17z" fill="#8E3B6B" />
      <path d="M-5 0c1-5 3-8 5-10" stroke="#B9659A" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M0-14v-6" stroke="#6B2A50" strokeWidth="2" strokeLinecap="round" />
    </g>
  );
}

/** A bunch of leafy greens (ugu / spinach). */
export function Greens({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path d="M0 30C-4 14-14 6-12-6 2-2 6 10 4 26z" fill="#1E8E5A" />
      <path d="M6 30C6 12 4-2 14-12c8 10 0 26-4 42z" fill="#2FAE70" />
      <path d="M10 30C16 16 24 8 34 6c-2 12-12 18-20 26z" fill="#1E8E5A" />
      <path d="M2 30h14" stroke="#14213D" strokeWidth="3" strokeLinecap="round" />
    </g>
  );
}

export function Pepper({ x, y, r = 0 }: { x: number; y: number; r?: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${r})`}>
      <path d="M0 0c8-4 22-2 26 6 3 7-3 12-11 11C6 16-2 9 0 0z" fill="#C2412D" />
      <path d="M0 1c-3-3-4-7-2-9" stroke="#1E8E5A" strokeWidth="3" strokeLinecap="round" fill="none" />
    </g>
  );
}

/** Paint bucket of garri: the unit Kaduna markets actually sell it by. */
export function GarriPaint({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path d="M0 6h52l-5 46H5z" fill="#F5F7FB" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
      <ellipse cx="26" cy="6" rx="26" ry="6" fill="#F7EBC6" stroke={INK} strokeWidth="2.5" />
      <path d="M6 4c6-6 34-6 40 0" fill="#F2DFA6" />
      <rect x="10" y="22" width="32" height="14" rx="3" fill="#2563EB" />
      <path d="M15 29h22" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
    </g>
  );
}

/** Woven market basket filled with produce. */
export function Basket({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 220" className={className} aria-hidden="true">
      <ellipse cx="150" cy="206" rx="128" ry="10" fill="#14213D" opacity="0.08" />
      {/* produce above the rim */}
      <Greens x={238} y={46} />
      <GarriPaint x={186} y={40} />
      <Yam x={30} y={88} r={-30} tone="#7A4A2E" />
      <Yam x={60} y={58} r={-10} tone="#9C6A48" />
      <Yam x={92} y={84} r={14} tone="#8A5A3B" />
      <Pepper x={148} y={66} r={-14} />
      <Onion x={176} y={96} s={1.05} />
      <Onion x={160} y={100} s={0.9} />
      <Tomato x={128} y={92} s={1.15} />
      <Tomato x={150} y={98} s={1.0} />
      <Tomato x={108} y={98} s={0.95} />
      <Pepper x={196} y={92} r={10} />
      {/* basket */}
      <path d="M26 104h248l-22 92a12 12 0 0 1-11.7 9.2H59.7A12 12 0 0 1 48 196z" fill="#D99A00" />
      <path d="M26 104h248l-3 12H29z" fill="#B57F00" />
      {[0, 1, 2, 3].map((i) => (
        <path key={`r${i}`} d={`M${36 + i * 3} ${128 + i * 18}h${228 - i * 6}`} stroke="#B57F00" strokeWidth="3" />
      ))}
      {Array.from({ length: 11 }, (_, i) => (
        <path key={`c${i}`} d={`M${50 + i * 20} 118l${-4 + i * 0.8} 84`} stroke="#F2C14E" strokeWidth="2.2" opacity="0.8" />
      ))}
      <path d="M26 104h248" stroke="#14213D" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function SupermarketBag({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 180" className={className} aria-hidden="true">
      <ellipse cx="100" cy="170" rx="70" ry="7" fill="#14213D" opacity="0.08" />
      {/* items peeking out */}
      <rect x="58" y="20" width="22" height="48" rx="4" fill="#C2412D" />
      <rect x="61" y="12" width="16" height="10" rx="2" fill="#14213D" />
      <rect x="84" y="30" width="34" height="38" rx="3" fill="#F5F7FB" stroke="#14213D" strokeWidth="2" />
      <path d="M90 42h22M90 50h14" stroke="#2563EB" strokeWidth="3" strokeLinecap="round" />
      <path d="M124 26c10-8 22-6 26 2l-14 40h-16z" fill="#1E8E5A" />
      {/* bag */}
      <path d="M40 62h120l-10 100a8 8 0 0 1-8 7H58a8 8 0 0 1-8-7z" fill="#2563EB" />
      <path d="M40 62h120l-1.5 12H41.5z" fill="#1D4ED8" />
      <path d="M72 62c0-20 12-32 28-32s28 12 28 32" fill="none" stroke="#14213D" strokeWidth="4" strokeLinecap="round" />
      <circle cx="100" cy="112" r="20" fill="#fff" opacity="0.95" />
      <path d="M87 110h26l-2.8 10a2.8 2.8 0 0 1-2.7 2h-15a2.8 2.8 0 0 1-2.7-2z" fill="#D99A00" />
      <path d="M89 110c1-6 5.5-9 11-9s10 3 11 9" fill="none" stroke="#14213D" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

export function JollofPlate({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 180" className={className} aria-hidden="true">
      <ellipse cx="110" cy="160" rx="92" ry="9" fill="#14213D" opacity="0.08" />
      <ellipse cx="110" cy="112" rx="96" ry="40" fill="#fff" stroke="#14213D" strokeWidth="3" />
      <ellipse cx="110" cy="108" rx="74" ry="28" fill="#E3E8F1" />
      {/* jollof mound */}
      <path d="M48 108c4-26 34-40 62-40s54 12 58 36c-20 14-100 18-120 4z" fill="#E0662E" />
      {Array.from({ length: 26 }, (_, i) => (
        <ellipse key={i} cx={62 + ((i * 37) % 96)} cy={86 + ((i * 13) % 20)} rx="3.4" ry="1.6" fill="#F4A261" transform={`rotate(${(i * 29) % 60 - 30} ${62 + ((i * 37) % 96)} ${86 + ((i * 13) % 20)})`} />
      ))}
      {/* chicken */}
      <path d="M126 76c10-12 34-10 38 4 3 12-8 22-22 21-12-1-22-13-16-25z" fill="#9C4A1F" />
      <path d="M160 82l16-10" stroke="#F5F7FB" strokeWidth="6" strokeLinecap="round" />
      <circle cx="178" cy="70" r="5" fill="#F5F7FB" />
      {/* plantain */}
      <ellipse cx="74" cy="118" rx="12" ry="7" fill="#D99A00" transform="rotate(-18 74 118)" />
      <ellipse cx="92" cy="124" rx="12" ry="7" fill="#F2C14E" transform="rotate(10 92 124)" />
      {/* salad */}
      <circle cx="150" cy="118" r="7" fill="#1E8E5A" />
      <circle cx="160" cy="112" r="5" fill="#2FAE70" />
      <circle cx="144" cy="110" r="4" fill="#C2412D" />
    </svg>
  );
}
