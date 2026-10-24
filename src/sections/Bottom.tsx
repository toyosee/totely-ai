import { useState } from 'react';
import { Logo, WaIcon } from '../art/Brand';
import { RiderArt } from '../art/Scenes';
import { SUPPORT_EMAIL, WA, WHATSAPP_NUMBER } from '../lib';

export function Areas() {
  return (
    <section id="areas" className="section bg-paper">
      <div className="wrap grid items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="kicker">Where we deliver</p>
          <h2 className="h2">Starting in Kaduna, area by area</h2>
          <p className="lede">When you say hi, Totely shows the areas we deliver to right now. New areas open as shoppers, riders and vendors join, and the ones customers ask for most open first.</p>
          <div className="mt-6 rounded-2xl border border-line bg-white p-5">
            <h3 className="text-lg font-bold">Shop anywhere in your city</h3>
            <p className="mt-1 text-ink-soft">
              Live in Kawo but prefer Central Market? Pick any open area in your city when you order. A shopper there buys
              it and a rider brings it home. The extra delivery fee for the trip is shown before you pay.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={WA.start} target="_blank" rel="noopener" className="btn-wa"><WaIcon />Check my area</a>
            <a href={WA.area} target="_blank" rel="noopener" className="btn-ghost">Ask for my area</a>
          </div>
          <p className="mt-4 text-[15px] text-ink-mute">Not covered yet? Choose “My area isn't listed” in the chat and we'll message you the day we open there.</p>
        </div>
        <KadunaMap />
      </div>
    </section>
  );
}

/** Stylised map: delivery areas as districts along the river, more opening. Illustrative, not to scale. */
function KadunaMap() {
  const open = [
    { x: 170, y: 96, label: 'Kawo' },
    { x: 370, y: 140, label: 'Central Market' },
    { x: 220, y: 236, label: 'Station Market' },
  ];
  const soon = [
    { x: 80, y: 190, label: '' },
    { x: 420, y: 270, label: '' },
    { x: 330, y: 310, label: '' },
    { x: 460, y: 70, label: '' },
  ];
  return (
    <figure className="rounded-2xl bg-white p-4">
      <svg viewBox="0 0 520 360" className="w-full" role="img" aria-label="Illustrated map of Kaduna with Totely delivery areas open around Kawo, Station Market and Central Market, a dashed route showing an order shopped at Central Market and delivered in Kawo, and more areas planned.">
        <rect width="520" height="360" rx="14" fill="#F5F7FB" />
        <path d="M-10 290C90 250 140 300 220 250S360 170 420 200s90 10 110-20" fill="none" stroke="#BFD3FB" strokeWidth="18" strokeLinecap="round" />
        <path d="M60 40l60 300M20 180h480M260 20v330M380 30l-90 310" stroke="#E3E8F1" strokeWidth="6" strokeLinecap="round" />
        {soon.map((p, i) => <circle key={i} cx={p.x} cy={p.y} r="34" fill="none" stroke="#6B7794" strokeWidth="2" strokeDasharray="5 6" />)}
        {/* Shopped at Central Market, delivered in Kawo */}
        <path d="M360 128Q272 46 184 84" fill="none" stroke="#2563EB" strokeWidth="3" strokeDasharray="7 7" strokeLinecap="round" />
        <path d="M196 74l-14 11 17 4" fill="none" stroke="#2563EB" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        {open.map((p) => (
          <g key={p.label}>
            <circle cx={p.x} cy={p.y} r="46" fill="#1E8E5A" opacity="0.14" />
            <circle cx={p.x} cy={p.y} r="9" fill="#1E8E5A" />
            <rect x={p.x - 62} y={p.y + 16} width="124" height="26" rx="13" fill="#fff" stroke="#E3E8F1" />
            <text x={p.x} y={p.y + 34} textAnchor="middle" fontSize="14" fontWeight="600" fill="#14213D" fontFamily="Instrument Sans Variable, sans-serif">{p.label}</text>
          </g>
        ))}
      </svg>
      <figcaption className="mt-3 flex flex-wrap gap-5 px-2 text-sm text-ink-soft">
        <span className="flex items-center gap-2"><span className="size-3 rounded-full bg-leaf" aria-hidden="true" />Delivering now</span>
        <span className="flex items-center gap-2"><span className="size-3 rounded-full border-2 border-dashed border-ink-mute" aria-hidden="true" />Opening as we grow</span>
        <span className="flex items-center gap-2"><span className="h-0 w-5 border-t-2 border-dashed border-totely" aria-hidden="true" />Shop in one area, deliver to another</span>
        <span className="text-ink-mute">Illustration, not to scale</span>
      </figcaption>
    </figure>
  );
}

/** Who is behind Totely. Matches what the assistant tells customers who ask (Settings → About Totely). */
export function About() {
  return (
    <section id="about" className="section">
      <div className="wrap grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div>
          <p className="kicker">About Totely</p>
          <h2 className="h2 max-w-2xl">Built in Kaduna, for the way Kaduna shops</h2>
          <p className="lede">
            Totely was built in Kaduna to make shopping from open markets, supermarkets and restaurants as easy as sending a
            WhatsApp message. A local shopper buys your items, checks quality and sends photos, and a rider brings them to your door.
          </p>
          <p className="mt-4 max-w-2xl text-lg text-ink-soft">
            Every order also means work for people in the city: vendors reach new customers, and shoppers and riders earn on
            their own time. We open area by area so each one is done properly before the next.
          </p>
        </div>
        <figure className="rounded-2xl border border-line p-6 sm:p-8" aria-label="Who is behind Totely">
          <p className="text-2xl font-semibold leading-snug" style={{ fontFamily: 'var(--font-display)' }}>
            Your daily needs, totally covered.
          </p>
          <figcaption className="mt-6 flex items-center gap-4 border-t border-line pt-6">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-totely-tint font-bold text-totely" aria-hidden="true">EO</span>
            <span>
              <span className="block font-bold">Elijah Abolaji Oluwatoyosi</span>
              <span className="block text-[15px] text-ink-mute">Founder, Totely</span>
            </span>
          </figcaption>
          <p className="mt-6 text-[15px] text-ink-soft">
            Totely is a product of Barterverse Technologies Limited, Kaduna, Nigeria.{' '}
            <a className="font-semibold text-totely underline underline-offset-2" href="https://thebarterverse.com" target="_blank" rel="noopener">thebarterverse.com</a>
          </p>
        </figure>
      </div>
    </section>
  );
}

const FAQS = [
  { q: 'What is Totely?', a: 'Totely is a shopping assistant on WhatsApp, run by Barterverse Technologies Ltd in Kaduna. You send your list, a Totely shopper buys it from the market, supermarket or restaurant you choose, and a rider delivers it. You follow every step in the chat.' },
  { q: 'What can I order?', a: 'Market foodstuff (garri, beans, rice, yam, pepper, oil and more), supermarket items, and meals from local restaurants. Ask in the chat if you are not sure; Totely will tell you what is available near you.' },
  { q: 'How do I pay?', a: 'From your Totely wallet, confirmed with your PIN. The wallet is an account with our partner bank that opens when you finish setup; fund it by bank transfer to its account number. You can also pay a single order by bank transfer: Totely sends the account details for that order in the chat. Only ever pay into the account named in that message.' },
  { q: 'Do I get a receipt?', a: 'Yes. When your order is delivered, a PDF receipt with your name, phone number, every item, the fees and the total is sent to your WhatsApp chat. Keep it, print it or forward it. Type RECEIPT in the chat any time to get it again.' },
  { q: 'How much does delivery cost?', a: 'It depends on your area and what you order. Item prices, the delivery fee and any service fee are all shown in the chat before you pay, so you always see the total first.' },
  { q: 'What if an item costs more, or is finished?', a: 'You are never charged more than you approved. If an item is cheaper on the day, we refund the difference; small rises are covered by Totely; if it costs noticeably more, you either approve the difference (paid from your wallet) or remove the item. If something is finished, your shopper suggests a replacement with a photo, and you decide. Anything not bought is refunded to your wallet.' },
  { q: 'Something was wrong with my order. What now?', a: 'Open your order page from the chat and tap “Report a problem” within 24 hours of delivery. Add a photo if you can. Refunds go to your Totely wallet; a small processing fee applies, except when Totely, our shopper or rider, or the vendor got it wrong. See our terms of service for details.' },
  { q: 'Is Totely safe?', a: 'Payments go through a licensed partner bank and need your PIN. Your PIN and BVN are only ever typed on a secure Totely page, never in the chat, and Totely does not store your BVN. Every delivery needs your code, and every step is photographed.' },
  { q: 'I lost my phone. How do I protect my account?', a: 'Reply FREEZE in the chat, or contact Totely from any other phone and we will freeze your account. Nothing can be paid from your wallet while it is frozen.' },
  { q: 'Which areas do you cover?', a: 'We are starting in Kaduna and opening area by area. Say hi to see the current list. If yours is not there, choose “My area isn’t listed” and we will tell you when we open there.' },
  { q: 'Can I buy from a market in another area?', a: 'Yes, anywhere we serve in your own city. Live in Kawo and want Central Market prices? Choose Central Market area when you order: a shopper there buys your items and a rider brings them to you. The extra delivery fee for the longer trip is shown in the chat before you pay. Each order is shopped in one area, and you can’t order from another city, for example Abuja from Kaduna.' },
  { q: 'Will Totely send me adverts?', a: 'Only if you say yes. We ask once; if you agree, you get deals, new stores and restaurants, and news when we open in your area, at most a couple of messages a week. Reply STOP anytime to stop them.' },
  { q: 'How do I become a vendor, shopper or rider?', a: 'Message Totely on WhatsApp and say which one, for example “I want to be a rider”. That opens an application with our team, and we contact you with the requirements for verification, usually a valid ID and a few documents, and where to send them. If something is missing, send it later and we reopen your application. Once approved, shoppers and riders use the Totely worker app and are paid weekly into their Totely wallet; vendors are settled to their bank account.' },
  { q: 'Can my business advertise on Totely?', a: 'Yes. Vendors on Totely can promote offers to customers in the areas they choose. Only customers who agreed to receive offers get them, and sponsored messages are clearly labelled. Message us on WhatsApp to ask about it.' },
];

export function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="section">
      <div className="wrap grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
        <div>
          <p className="kicker">FAQ</p>
          <h2 className="h2">Questions people ask</h2>
          <p className="lede">Anything else? Type HELP in the chat and someone from Totely will answer.</p>
        </div>
        <div className="divide-y divide-line border-y border-line">
          {FAQS.map((f, i) => (
            <div key={f.q}>
              <h3>
                <button className="flex w-full items-center justify-between gap-4 py-5 text-left text-lg font-semibold" aria-expanded={open === i} aria-controls={`faq-${i}`} onClick={() => setOpen(open === i ? -1 : i)} style={{ fontFamily: 'var(--font-sans)', letterSpacing: 0 }}>
                  {f.q}
                  <svg width="20" height="20" viewBox="0 0 20 20" className={`shrink-0 transition-transform ${open === i ? 'rotate-45' : ''}`} aria-hidden="true"><path d="M10 4v12M4 10h12" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" /></svg>
                </button>
              </h3>
              <div id={`faq-${i}`} hidden={open !== i} className="pb-6 pr-8 text-ink-soft">{f.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-totely">
      <div className="wrap grid items-center gap-8 py-16 sm:py-20 lg:grid-cols-[1.4fr_1fr]">
        <div className="text-white">
          <h2 className="text-4xl font-extrabold leading-[1.05] sm:text-5xl">Your market run is one message away</h2>
          <p className="mt-4 max-w-xl text-lg text-white/85">No download. No forms. Just say hi.</p>
          <a href={WA.start} target="_blank" rel="noopener" className="btn mt-8 bg-white px-7 text-[17px] text-ink hover:bg-paper"><WaIcon />Say hi on WhatsApp</a>
        </div>
        <div className="mx-auto hidden w-full max-w-sm rounded-[2rem] bg-white/95 p-6 lg:block"><RiderArt className="w-full" /></div>
      </div>
    </section>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  const phone = `+${WHATSAPP_NUMBER.slice(0, 3)} ${WHATSAPP_NUMBER.slice(3, 6)} ${WHATSAPP_NUMBER.slice(6, 9)} ${WHATSAPP_NUMBER.slice(9)}`;
  return (
    <footer className="bg-ink text-white">
      <div className="wrap grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <span className="inline-block rounded-xl bg-white px-3 py-2"><Logo /></span>
          <p className="mt-4 max-w-xs text-white/70">Your daily needs, totally covered. Markets, supermarkets and restaurants on WhatsApp.</p>
        </div>
        <FooterCol title="Shop" links={[['How it works', '/#how'], ['What you can order', '/#order'], ['Where we deliver', '/#areas'], ['Safety', '/#safety'], ['About Totely', '/#about'], ['FAQ', '/#faq']]} />
        <FooterCol title="Earn with Totely" links={[['Sell on Totely', WA.vendor], ['Become a shopper', WA.agent], ['Become a rider', WA.rider], ['Advertise your store', WA.advertise]]} />
        <div>
          <h3 className="text-sm font-semibold text-white/60" style={{ fontFamily: 'var(--font-sans)', letterSpacing: 0 }}>Talk to us</h3>
          <ul className="mt-4 space-y-2.5">
            <li><a className="text-white/85 hover:text-white" href={WA.start} target="_blank" rel="noopener">WhatsApp {phone}</a></li>
            {SUPPORT_EMAIL && <li><a className="text-white/85 hover:text-white" href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a></li>}
            <li className="text-white/70">Kaduna, Nigeria</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="wrap flex flex-col gap-3 py-6 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <p>© {year} Totely, a product of Barterverse Technologies Ltd. WhatsApp is a trademark of Meta Platforms, Inc.; Totely is not affiliated with Meta.</p>
          <p className="flex shrink-0 gap-5"><a className="hover:text-white" href="/privacy/">Privacy policy</a><a className="hover:text-white" href="/terms/">Terms of service</a></p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-white/60" style={{ fontFamily: 'var(--font-sans)', letterSpacing: 0 }}>{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {links.map(([label, href]) => (
          <li key={label}><a className="text-white/85 hover:text-white" href={href} {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener' } : {})}>{label}</a></li>
        ))}
      </ul>
    </div>
  );
}
