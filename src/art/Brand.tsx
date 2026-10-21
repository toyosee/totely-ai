/** Totely mark: a chat bubble carrying a market basket. */
export function LogoMark({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden="true">
      <rect width="40" height="40" rx="11" fill="#2563EB" />
      <path d="M9 13.5A4.5 4.5 0 0 1 13.5 9h13A4.5 4.5 0 0 1 31 13.5v9a4.5 4.5 0 0 1-4.5 4.5H17l-5.2 4.1c-.7.5-1.6 0-1.6-.8V26.6A4.5 4.5 0 0 1 9 22.5z" fill="#fff" />
      <path d="M12.6 17.4h14.8l-1.6 6.1a1.6 1.6 0 0 1-1.5 1.2h-8.6a1.6 1.6 0 0 1-1.5-1.2z" fill="#D99A00" />
      <path d="M14.2 20.4h11.6M14.9 22.6h10.2" stroke="#B57F00" strokeWidth="1" />
      <path d="M13.8 17.4c.6-3.6 3.1-5.4 6.2-5.4s5.6 1.8 6.2 5.4" fill="none" stroke="#14213D" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function Logo() {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark />
      <span className="font-display text-[1.375rem] font-bold tracking-tight text-ink" style={{ fontFamily: 'var(--font-display)' }}>totely</span>
    </span>
  );
}

/** WhatsApp glyph (simple, own drawing). */
export function WaIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M12 2.2a9.7 9.7 0 0 0-8.4 14.6L2.2 21.8l5.1-1.3A9.7 9.7 0 1 0 12 2.2zm0 17.6a7.9 7.9 0 0 1-4-1.1l-.3-.2-3 .8.8-2.9-.2-.3A7.9 7.9 0 1 1 12 19.8zm4.4-5.9c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.5.1l-.8.9c-.1.2-.3.2-.5.1a6.5 6.5 0 0 1-3.2-2.8c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.5-.4h-.5a.9.9 0 0 0-.6.3 2.7 2.7 0 0 0-.8 2c0 1.2.9 2.3 1 2.5.1.2 1.7 2.7 4.2 3.7 1.6.7 2.2.7 3 .6.5-.1 1.4-.6 1.6-1.2.2-.6.2-1.1.1-1.2l-.5-.3z" />
    </svg>
  );
}
