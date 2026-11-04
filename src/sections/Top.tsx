import { useEffect, useState } from 'react';
import { Logo, WaIcon } from '../art/Brand';
import { Basket, JollofPlate, SupermarketBag } from '../art/Market';
import { PhoneChat } from '../art/Phone';
import { WA } from '../lib';

const NAV = [
  { href: '/#how', label: 'How it works' },
  { href: '/#order', label: 'What you can order' },
  { href: '/#safety', label: 'Safety' },
  { href: '/#earn', label: 'Earn with Totely' },
  { href: '/#areas', label: 'Areas' },
  { href: '/#about', label: 'About' },
  { href: '/#faq', label: 'FAQ' },
];

const facts = ['No app to download', 'Pay with your PIN', 'Photos at every step'];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  return (
    <header className={`sticky top-0 z-40 bg-white/90 backdrop-blur transition-shadow ${scrolled ? 'shadow-[0_1px_0_#E3E8F1]' : ''}`}>
      <div className="wrap flex h-16 items-center justify-between gap-4">
        <a href="/" aria-label="Totely home"><Logo /></a>
        <nav className="hidden items-center gap-6 xl:flex" aria-label="Main">
          {NAV.map((n) => <a key={n.href} href={n.href} className="whitespace-nowrap text-[15px] font-medium text-ink-soft hover:text-ink">{n.label}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <a href={WA.start} target="_blank" rel="noopener" className="btn-wa hidden min-h-10 whitespace-nowrap px-5 text-[15px] sm:inline-flex"><WaIcon size={18} />Say hi on WhatsApp</a>
          <button className="rounded-lg p-2 text-ink xl:hidden" aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true"><path d={open ? 'M6 6l12 12M18 6L6 18' : 'M4 7h16M4 12h16M4 17h16'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-nav" className="wrap flex flex-col gap-1 pb-4 xl:hidden" aria-label="Main">
          {NAV.map((n) => <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="rounded-lg px-2 py-2.5 font-medium text-ink-soft hover:bg-paper">{n.label}</a>)}
          <a href={WA.start} target="_blank" rel="noopener" className="btn-wa mt-2"><WaIcon />Say hi on WhatsApp</a>
        </nav>
      )}
    </header>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="wrap grid items-center gap-12 pb-16 pt-10 lg:grid-cols-[1.25fr_1fr] lg:gap-6 lg:pb-24 lg:pt-16">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-palm-tint px-3 py-1 text-sm font-semibold text-palm-ink">
            <span className="size-2 rounded-full bg-palm" aria-hidden="true" />Your Daily Needs Totally Covered
          </p>
          <h1 className="mt-5 text-[2.6rem] font-extrabold leading-[1.02] sm:text-[3.5rem] xl:text-[3.9rem]">
            Just say 'HI'.<br /><span className="lg:whitespace-nowrap">We'll do the market.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink-soft sm:text-xl">
            Send your list: Type it, voice-note it or snap a photo of it, in English, Pidgin or Hausa. A Totely shopper buys it from the
            market, supermarket or kitchen you choose, shows you photos as they go, and a rider brings it to your door.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={WA.start} target="_blank" rel="noopener" className="btn-wa px-7 text-[17px]"><WaIcon />Say hi on WhatsApp</a>
            <a href="/#how" className="btn-ghost">See how it works</a>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[15px] text-ink-soft">
            {facts.map((t) => (
              <li key={t} className="flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="10" fill="#E3F4EB" /><path d="M6 10.5l2.6 2.5L14 7.5" fill="none" stroke="#1E8E5A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative mx-auto w-full max-w-[520px]">
          <Basket className="absolute -bottom-4 -left-6 hidden w-[60%] sm:block lg:-left-20" />
          <div className="relative sm:ml-auto sm:w-fit sm:pr-2">
            <PhoneChat />
          </div>
          <p className="mt-4 text-center text-xs text-ink-mute sm:text-right">Example conversation. Prices vary by market and day.</p>
        </div>
      </div>
    </section>
  );
}

const ORDER = [
  {
    Art: Basket,
    title: 'Market foodstuff',
    text: 'Garri by the paint, beans by the mudu, yam, tatashe, tomatoes, palm oil, onions. Bought fresh from stalls in the market you pick.',
    eg: 'e.g. “2 paint garri, 1 tuber yam”',
    tone: 'bg-palm-tint',
  },
  {
    Art: SupermarketBag,
    title: 'Supermarket shopping',
    text: 'Noodles by the carton, milk, oil, toiletries and household items from supermarkets near you, at the shelf price.',
    eg: 'e.g. “1 carton Indomie, 2 tins Peak milk”',
    tone: 'bg-totely-tint',
  },
  {
    Art: JollofPlate,
    title: 'Restaurant meals',
    text: 'Order from local kitchens with your choices of protein, size and extras, prepared fresh and delivered hot.',
    eg: 'e.g. “Jollof and chicken, extra plantain”',
    tone: 'bg-pepper-tint',
  },
];

export function WhatYouCanOrder() {
  return (
    <section id="order" className="section bg-paper">
      <div className="wrap">
        <p className="kicker">What you can order</p>
        <h2 className="h2 max-w-3xl">The whole shopping trip, in one chat</h2>
        <p className="lede">Write it the way you would tell a family member going to market. Totely understands local units and names, works out prices, and shows you the total before you pay.</p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {ORDER.map(({ Art, title, text, eg, tone }) => (
            <article key={title} className="flex flex-col overflow-hidden rounded-2xl bg-white">
              <div className={`flex h-48 items-end justify-center px-8 pt-6 ${tone}`}><Art className="h-40 w-auto" /></div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-2 text-ink-soft">{text}</p>
                <p className="mt-auto pt-4 text-[15px] font-medium text-ink">{eg}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
