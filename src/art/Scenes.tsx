/** Smaller scene illustrations: photo proof frames, earners, safety. Same palette and stroke as Market.tsx. */
import { Tomato, Yam, Pepper, GarriPaint } from './Market';

const INK = '#14213D';

/** Polaroid-style frame used in the "see every step" timeline. */
function Snap({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <svg viewBox="0 0 160 150" className="w-full" role="img" aria-label={label}>
      <rect x="4" y="4" width="152" height="142" rx="10" fill="#fff" stroke="#E3E8F1" strokeWidth="2" />
      <rect x="14" y="14" width="132" height="98" rx="6" fill="#F5F7FB" />
      <g>{children}</g>
      <circle cx="140" cy="130" r="4" fill="#1E8E5A" />
    </svg>
  );
}

export function ProofItem() {
  return (
    <Snap label="Photo of an item in the agent's hand">
      <rect x="14" y="74" width="132" height="38" fill="#E3E8F1" />
      <path d="M40 100c10-22 70-26 90-6" fill="#E9B98F" />
      <Yam x={50} y={70} r={-8} />
      <path d="M118 30h22v14h-22z" fill="#D99A00" />
      <text x="129" y="40" fontSize="9" fontWeight="700" textAnchor="middle" fill={INK}>₦</text>
    </Snap>
  );
}

export function ProofBasket() {
  return (
    <Snap label="Photo of the whole basket">
      <path d="M36 70h88l-8 38H44z" fill="#D99A00" />
      <path d="M36 70h88" stroke={INK} strokeWidth="2.5" />
      <path d="M44 86h72M46 98h68" stroke="#B57F00" strokeWidth="2.5" />
      <Tomato x={70} y={62} s={0.7} />
      <Tomato x={84} y={64} s={0.65} />
      <Pepper x={52} y={58} r={-12} />
      <g transform="translate(96 28) scale(0.6)"><GarriPaint x={0} y={0} /></g>
    </Snap>
  );
}

export function ProofSealed() {
  return (
    <Snap label="Photo of the sealed bag with the order number">
      <path d="M48 44h64l-6 62H54z" fill="#2563EB" />
      <path d="M48 44h64l-1 8H49z" fill="#1D4ED8" />
      <path d="M62 44c0-12 8-20 18-20s18 8 18 20" fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round" />
      <rect x="56" y="66" width="48" height="22" rx="3" fill="#fff" />
      <text x="80" y="81" fontSize="10" fontWeight="700" textAnchor="middle" fill={INK} fontFamily="Instrument Sans, sans-serif">TOT-7K3Q</text>
      <path d="M50 58l60 0" stroke="#D99A00" strokeWidth="4" strokeDasharray="6 4" />
    </Snap>
  );
}

export function ProofDoor() {
  return (
    <Snap label="Photo at the doorstep on handover">
      <rect x="92" y="22" width="44" height="90" fill="#8A5A3B" />
      <circle cx="128" cy="70" r="2.5" fill="#F2C14E" />
      <rect x="14" y="98" width="132" height="14" fill="#C9B79C" />
      <path d="M40 98l6-26h26l6 26z" fill="#2563EB" />
      <path d="M50 72c0-8 4-13 9-13s9 5 9 13" fill="none" stroke={INK} strokeWidth="2.5" />
      <rect x="22" y="22" width="36" height="20" rx="4" fill="#fff" stroke="#E3E8F1" />
      <text x="40" y="36" fontSize="10" fontWeight="700" textAnchor="middle" fill="#1E8E5A" fontFamily="Instrument Sans, sans-serif">6204</text>
    </Snap>
  );
}

/** Rider on a motorbike with a Totely delivery box. */
export function RiderArt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 170" className={className} aria-hidden="true">
      <ellipse cx="120" cy="156" rx="96" ry="7" fill={INK} opacity="0.08" />
      <circle cx="62" cy="128" r="24" fill="none" stroke={INK} strokeWidth="8" />
      <circle cx="182" cy="128" r="24" fill="none" stroke={INK} strokeWidth="8" />
      <path d="M62 128l40-40h44l36 40" fill="none" stroke="#3B4A6B" strokeWidth="7" strokeLinejoin="round" />
      <path d="M96 92h64l-10 26h-46z" fill="#C2412D" />
      <path d="M150 70l14 20" stroke={INK} strokeWidth="6" strokeLinecap="round" />
      <path d="M158 66h16" stroke={INK} strokeWidth="6" strokeLinecap="round" />
      {/* box */}
      <rect x="30" y="56" width="52" height="44" rx="6" fill="#2563EB" />
      <path d="M44 76h24" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
      <path d="M44 86h14" stroke="#D99A00" strokeWidth="4" strokeLinecap="round" />
      {/* rider */}
      <path d="M112 90l14-34 20 4-6 30z" fill="#1E8E5A" />
      <path d="M128 64l26 14" stroke="#1E8E5A" strokeWidth="9" strokeLinecap="round" />
      <path d="M116 90l-4 30 18 0" fill="none" stroke={INK} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="140" cy="40" r="15" fill="#6B4029" />
      <path d="M124 38a16 16 0 0 1 32 0z" fill="#D99A00" />
      <path d="M124 38h34" stroke={INK} strokeWidth="3" />
    </svg>
  );
}

/** Shopper (agent) with phone and basket, checking a list. */
export function ShopperArt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 170" className={className} aria-hidden="true">
      <ellipse cx="120" cy="158" rx="80" ry="7" fill={INK} opacity="0.08" />
      <path d="M96 156l6-60h40l6 60z" fill="#2563EB" />
      <path d="M100 96c0-16 10-26 22-26s22 10 22 26z" fill="#2563EB" />
      <circle cx="122" cy="50" r="17" fill="#6B4029" />
      <path d="M104 46c2-14 32-20 38 0-8-6-30-6-38 0z" fill="#C2412D" />
      {/* phone in hand */}
      <path d="M140 92l26-6" stroke="#6B4029" strokeWidth="9" strokeLinecap="round" />
      <rect x="160" y="64" width="20" height="34" rx="4" fill={INK} />
      <rect x="163" y="69" width="14" height="22" rx="2" fill="#E7FFDB" />
      <circle cx="170" cy="80" r="3" fill="#1E8E5A" />
      {/* basket on arm */}
      <path d="M100 100l-22 18" stroke="#6B4029" strokeWidth="9" strokeLinecap="round" />
      <path d="M48 112h56l-6 30H54z" fill="#D99A00" />
      <path d="M58 112c0-12 8-20 18-20s18 8 18 20" fill="none" stroke={INK} strokeWidth="3" />
      <Tomato x={68} y={108} s={0.6} />
      <Pepper x={80} y={104} r={-10} />
    </svg>
  );
}

/** Market stall with awning: vendors and restaurants. */
export function StallArt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 170" className={className} aria-hidden="true">
      <ellipse cx="120" cy="158" rx="100" ry="7" fill={INK} opacity="0.08" />
      <rect x="40" y="70" width="160" height="84" fill="#F5F7FB" stroke={INK} strokeWidth="3" />
      {[0, 1, 2, 3, 4].map((i) => (
        <path key={i} d={`M${30 + i * 36} 40h36v26a18 18 0 0 1-36 0z`} fill={i % 2 ? '#fff' : '#1E8E5A'} stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      ))}
      <rect x="54" y="104" width="132" height="10" rx="2" fill="#8A5A3B" />
      <Tomato x={74} y={96} s={0.6} />
      <Tomato x={88} y={98} s={0.55} />
      <Yam x={104} y={92} r={0} />
      <g transform="translate(150 70) scale(0.55)"><GarriPaint x={0} y={0} /></g>
      <rect x="92" y="124" width="56" height="22" rx="4" fill="#2563EB" />
      <path d="M104 135h32" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

/** Shield with a PIN pad: payments protected by your PIN. */
export function ShieldArt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <path d="M100 18l64 22v50c0 44-28 76-64 92-36-16-64-48-64-92V40z" fill="#E8EFFE" stroke="#2563EB" strokeWidth="5" strokeLinejoin="round" />
      <rect x="66" y="70" width="68" height="84" rx="10" fill="#fff" stroke={INK} strokeWidth="3" />
      {[0, 1, 2].map((r) => [0, 1, 2].map((c) => <circle key={`${r}${c}`} cx={82 + c * 18} cy={92 + r * 18} r="5" fill={r === 2 && c === 1 ? '#1E8E5A' : '#3B4A6B'} />))}
      <path d="M78 76h44" stroke="#D99A00" strokeWidth="4" strokeLinecap="round" strokeDasharray="2 8" />
    </svg>
  );
}
