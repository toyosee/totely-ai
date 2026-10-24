import type { ReactNode } from 'react';
import { LogoMark } from './Brand';

function Bubble({ me, children, delay, time }: { me?: boolean; children: ReactNode; delay: number; time: string }) {
  return (
    <div className={`bubble-in flex ${me ? 'justify-end' : 'justify-start'}`} style={{ animationDelay: `${delay}ms` }}>
      <div className={`max-w-[85%] rounded-xl px-3 py-2 text-[13px] leading-snug shadow-[0_1px_0.5px_rgba(11,20,26,0.13)] ${me ? 'rounded-tr-sm bg-chat' : 'rounded-tl-sm bg-white'}`}>
        {children}
        <span className="mt-0.5 block text-right text-[10px] text-[#667781]">{time}{me && ' ✓✓'}</span>
      </div>
    </div>
  );
}

function Btn({ children }: { children: ReactNode }) {
  return <span className="mt-1.5 block rounded-lg border-t border-[#e9edef] pt-1.5 text-center text-[13px] font-semibold text-[#027eb5]">{children}</span>;
}

/** Example Totely conversation in a phone: list in, priced basket, photo proof, delivered. */
export function PhoneChat() {
  return (
    <div className="relative mx-auto w-[300px] sm:w-[320px]" role="img" aria-label="Example WhatsApp chat: a customer sends a market list, Totely replies with prices, the agent sends a basket photo, the order is delivered and a PDF receipt arrives in the chat.">
      <div className="rounded-[2.6rem] bg-ink p-2.5 shadow-[0_30px_60px_-20px_rgba(20,33,61,0.45)]">
        <div className="overflow-hidden rounded-[2.1rem] bg-chat-bg">
          {/* chat header */}
          <div className="flex items-center gap-2.5 bg-[#075E54] px-4 pb-2.5 pt-6 text-white">
            <LogoMark size={30} />
            <div className="leading-tight">
              <p className="text-[14px] font-semibold">Totely</p>
              <p className="text-[11px] text-white/75">online</p>
            </div>
          </div>
          <div className="space-y-2 px-3 py-3" aria-hidden="true">
            <Bubble me delay={150} time="9:41">2 paint garri, 1 tuber of yam, small tatashe and 2 mudu beans 🙏</Bubble>
            <Bubble delay={650} time="9:41">
              <span className="font-semibold">Your list from Central Market</span>
              <span className="mt-1 block num text-[12px] text-ink-soft">
                Garri (white), 2 paint · ₦3,900<br />
                Yam, 1 tuber · ₦3,750<br />
                Tatashe, small · ₦1,300<br />
                Beans (oloyin), 2 mudu · ₦4,500<br />
                Delivery ₦800 · <span className="font-semibold text-ink">Total ₦14,250</span>
              </span>
              <Btn>Pay from my wallet</Btn>
            </Bubble>
            <Bubble delay={1150} time="10:07">
              <span className="block overflow-hidden rounded-lg">
                <BasketPhoto />
              </span>
              <span className="mt-1.5 block">Musa has everything 🧺 Does this look right?</span>
              <Btn>✅ Looks good</Btn>
            </Bubble>
            <Bubble delay={1650} time="10:52">
              <span className="font-semibold text-leaf">Delivered</span> Your code was <span className="num font-semibold">6204</span>. Rate your order?
            </Bubble>
            <Bubble delay={2150} time="10:52">
              <span className="flex items-center gap-2.5 rounded-lg bg-[#f5f6f6] p-2">
                <span className="flex h-9 w-7 shrink-0 items-end justify-center rounded-[4px] bg-pepper pb-1 text-[8px] font-bold text-white">PDF</span>
                <span className="min-w-0 leading-tight">
                  <span className="block truncate font-semibold">Receipt TOT-7K3Q.pdf</span>
                  <span className="block text-[11px] text-[#667781]">1 page · PDF</span>
                </span>
              </span>
              <span className="mt-1.5 block">🧾 Your receipt. Thank you for shopping with Totely.</span>
            </Bubble>
          </div>
        </div>
      </div>
    </div>
  );
}

/** A "photo" of the basket, drawn so it reads as a phone snapshot. */
function BasketPhoto() {
  return (
    <svg viewBox="0 0 240 120" className="block w-full" aria-hidden="true">
      <rect width="240" height="120" fill="#C9B79C" />
      <rect y="78" width="240" height="42" fill="#A88F6E" />
      <path d="M40 60h160l-14 50H54z" fill="#D99A00" />
      <path d="M40 60h160" stroke="#14213D" strokeWidth="3" />
      <path d="M56 80h128M60 96h120" stroke="#B57F00" strokeWidth="3" />
      <path d="M70 58c8-10 30-12 40-6 4 3 2 8-4 9-14 2-28 1-36-3z" fill="#8A5A3B" />
      <circle cx="132" cy="52" r="9" fill="#E0442E" />
      <circle cx="148" cy="55" r="8" fill="#E0442E" />
      <path d="M152 40h30l-3 18h-24z" fill="#F5F7FB" stroke="#14213D" strokeWidth="2" />
      <ellipse cx="167" cy="40" rx="15" ry="4" fill="#F7EBC6" stroke="#14213D" strokeWidth="2" />
      <path d="M112 50c6-3 16-2 18 3 1 4-3 7-8 6-6-1-11-4-10-9z" fill="#C2412D" />
    </svg>
  );
}
