import type { ReactNode } from 'react';
import { WaIcon } from '../art/Brand';
import { ProofBasket, ProofDoor, ProofItem, ProofSealed, RiderArt, ShieldArt, ShopperArt, StallArt } from '../art/Scenes';
import { WA } from '../lib';

const STEPS = [
  { title: 'Say hi on WhatsApp', text: 'Set up takes about two minutes: your name, delivery area and address. Your PIN goes on a secure page, never in the chat, and your Totely wallet opens with our partner bank.' },
  { title: 'Send your list', text: 'Type it, send a voice note, or snap a handwritten list. Choose a market or store, and Totely prices every item with delivery and fees shown up front.' },
  { title: 'Approve and pay', text: 'Tap to pay from your Totely wallet and confirm with your PIN. Fund the wallet any time by bank transfer to its account number.' },
  { title: 'Watch it happen', text: 'Your shopper sends photos as they buy, checks any price change or swap with you first, and a rider delivers with a code only you have.' },
];

export function HowItWorks() {
  return (
    <section id="how" className="section">
      <div className="wrap">
        <p className="kicker">How it works</p>
        <h2 className="h2 max-w-3xl">From “Hi” to your doorstep in four steps</h2>
        <ol className="mt-14 grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <li key={s.title} className="relative">
              <span className="flex size-11 items-center justify-center rounded-full bg-ink font-display text-lg font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>{i + 1}</span>
              {i < STEPS.length - 1 && <span className="absolute left-14 right-0 top-[22px] hidden h-px bg-line lg:block" aria-hidden="true" />}
              <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-ink-soft">{s.text}</p>
            </li>
          ))}
        </ol>
        <div className="mt-14 flex flex-col items-start gap-4 rounded-2xl bg-paper p-6 sm:flex-row sm:items-center">
          <p className="text-lg sm:flex-1"><span className="font-semibold">Ready when you are.</span> <span className="text-ink-soft">Send “Hi” and Totely walks you through it.</span></p>
          <a href={WA.start} target="_blank" rel="noopener" className="btn-wa"><WaIcon />Start on WhatsApp</a>
        </div>
      </div>
    </section>
  );
}

const PROOF = [
  { Art: ProofItem, title: 'Every item', text: 'A photo as each item is bought, with the real shelf or stall price.' },
  { Art: ProofBasket, title: 'The full basket', text: 'You see everything together and tap “Looks good” before it is packed.' },
  { Art: ProofSealed, title: 'Sealed with your order number', text: 'The bag is sealed and labelled before a rider ever touches it.' },
  { Art: ProofDoor, title: 'At your door', text: 'The rider hands over only when you give your delivery code, and takes a photo.' },
];

export function PhotoProof() {
  return (
    <section className="section bg-ink text-white">
      <div className="wrap">
        <p className="text-base font-semibold text-palm">Nothing hidden</p>
        <h2 className="mt-2 max-w-3xl text-3xl font-bold leading-[1.1] sm:text-[2.75rem]">See every step of your order</h2>
        <p className="mt-4 max-w-2xl text-lg text-white/75">The same photos are on your order page, so you always know what was bought, what it cost, and who handled it.</p>
        <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-6 lg:grid-cols-4">
          {PROOF.map(({ Art, title, text }, i) => (
            <figure key={title}>
              <div className="rounded-2xl bg-white/5 p-2 ring-1 ring-white/10 sm:p-4"><Art /></div>
              <figcaption className="mt-4">
                <span className="num text-sm font-semibold text-palm">Step {i + 1}</span>
                <span className="mt-1 block text-lg font-bold">{title}</span>
                <span className="mt-1 block text-white/75">{text}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-14 grid gap-6 border-t border-white/10 pt-10 md:grid-cols-3">
          <Promise title="Prices don't change without your OK">If an item costs more than listed, you choose: pay the difference from your wallet or drop it.</Promise>
          <Promise title="Swaps ask you first">If something is finished, the shopper suggests a replacement with a photo. You say yes or no.</Promise>
          <Promise title="Something wrong? Tell us">Report a problem with photos within 24 hours of delivery. Refunds go straight to your wallet.</Promise>
        </div>
      </div>
    </section>
  );
}

function Promise({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="mt-2 text-white/75">{children}</p>
    </div>
  );
}

const FEATURES = [
  { title: 'Voice notes and photos', text: 'Too busy to type? Send a voice note or a photo of a handwritten list. Totely turns it into a priced order.', icon: 'M12 3a3 3 0 0 1 3 3v6a3 3 0 0 1-6 0V6a3 3 0 0 1 3-3zm-7 9a7 7 0 0 0 14 0M12 19v3' },
  { title: 'Speaks your language', text: 'Chat in English, Pidgin or Hausa. Ask for “1 paint garri” or “tatashe” and Totely knows what you mean.', icon: 'M4 5h16v10H9l-5 4zM8 9h8M8 12h5' },
  { title: 'A wallet that does the paying', text: 'Your Totely wallet is held by our partner bank. Fund it by transfer, pay with your PIN, and receive refunds there.', icon: 'M3 7h18v12H3zM3 7l3-3h12l3 3M16 13h2' },
  { title: 'Live order page', text: 'A link shows where your order is, the photos, and who is shopping and delivering it.', icon: 'M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11zm0-8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z' },
  { title: 'Clear fees, before you pay', text: 'Item prices, delivery and service fees are shown in the chat before you confirm. No surprises at the door.', icon: 'M7 3h10v18l-2.5-1.5L12 21l-2.5-1.5L7 21zM10 8h4M10 12h4' },
  { title: 'Real people when you need them', text: 'Type HELP any time to reach the Totely team in the same chat.', icon: 'M5 12a7 7 0 0 1 14 0v4a2 2 0 0 1-2 2h-1v-6h3M5 12v4a2 2 0 0 0 2 2h1v-6H5' },
];

export function Features() {
  return (
    <section className="section">
      <div className="wrap grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="kicker">Built for how Kaduna shops</p>
          <h2 className="h2">Everything happens inside WhatsApp</h2>
          <p className="lede">No new app, no forms, no data-hungry downloads. If you can send a message, you can shop with Totely.</p>
        </div>
        <ul className="grid gap-x-10 gap-y-9 sm:grid-cols-2">
          {FEATURES.map((f) => (
            <li key={f.title} className="flex gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-totely-tint text-totely">
                <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path d={f.icon} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
              <span>
                <h3 className="text-lg font-bold">{f.title}</h3>
                <p className="mt-1 text-ink-soft">{f.text}</p>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const SAFETY = [
  { title: 'Your PIN for every payment', text: 'Nothing leaves your wallet until you confirm it with your 4-digit PIN.' },
  { title: 'PIN and BVN never in chat', text: 'They are typed on a secure Totely page, so they never sit in your WhatsApp history. Totely never stores your BVN.' },
  { title: 'A code for every delivery', text: 'Only you have the code. The rider cannot complete delivery without it.' },
  { title: 'Every action recorded', text: 'Staff actions on your order and account are logged, with photos kept as proof.' },
];

export function Safety() {
  return (
    <section id="safety" className="section bg-paper">
      <div className="wrap">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.7fr]">
          <div>
            <p className="kicker">Safety</p>
            <h2 className="h2 max-w-2xl">Your money and your data, protected at each layer</h2>
            <p className="lede">Payments run through a licensed partner bank. Totely never holds your money and never asks for your card, PIN or BVN in the chat.</p>
            <dl className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {SAFETY.map((s) => (
                <div key={s.title} className="border-l-2 border-totely pl-4">
                  <dt className="text-lg font-bold">{s.title}</dt>
                  <dd className="mt-1 text-ink-soft">{s.text}</dd>
                </div>
              ))}
            </dl>
          </div>
          <ShieldArt className="mx-auto w-56 sm:w-72" />
        </div>
        <div className="mt-16 flex flex-col gap-6 rounded-2xl bg-ink p-8 text-white sm:flex-row sm:items-center sm:p-10">
          <div className="flex-1">
            <h3 className="text-2xl font-bold">Lost your phone? Freeze Totely in seconds</h3>
            <p className="mt-2 max-w-2xl text-white/75">Reply <span className="font-semibold text-white">FREEZE</span> in the chat, or message us from any other phone and we'll freeze your account straight away. Your wallet stays safe until you're back.</p>
          </div>
          <a href={WA.start} target="_blank" rel="noopener" className="btn shrink-0 bg-white text-ink hover:bg-paper">Contact Totely</a>
        </div>
      </div>
    </section>
  );
}

const EARN = [
  { Art: StallArt, title: 'Sell on Totely', who: 'Stores, market stalls and restaurants', points: ['New customers ordering on WhatsApp', 'Orders arrive priced and paid', 'Settled to your bank account'], cta: 'Become a vendor', href: WA.vendor },
  { Art: ShopperArt, title: 'Shop for customers', who: 'Totely shoppers (agents)', points: ['Pick up shopping jobs in the Totely worker app', 'Fee for every order, paid weekly to your wallet', 'Work the markets you already know'], cta: 'Become a shopper', href: WA.agent },
  { Art: RiderArt, title: 'Deliver orders', who: 'Riders with a motorbike', points: ['Offers come to the nearest rider first', 'Paid weekly into your Totely wallet', 'Shop and deliver the same order to earn both fees'], cta: 'Become a rider', href: WA.rider },
];

export function Earn() {
  return (
    <section id="earn" className="section">
      <div className="wrap">
        <p className="kicker">Earn with Totely</p>
        <h2 className="h2 max-w-3xl">Grow your business, or earn on your own time</h2>
        <p className="lede">Totely runs on local people: the sellers customers already trust, and shoppers and riders who know the city. One person can shop and ride.</p>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {EARN.map(({ Art, title, who, points, cta, href }) => (
            <article key={title} className="flex flex-col rounded-2xl border border-line p-6">
              <Art className="h-36 w-auto self-start" />
              <h3 className="mt-4 text-2xl font-bold">{title}</h3>
              <p className="text-[15px] font-medium text-ink-mute">{who}</p>
              <ul className="mb-6 mt-4 space-y-2 text-ink-soft">
                {points.map((p) => (
                  <li key={p} className="flex gap-2"><span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-palm" aria-hidden="true" />{p}</li>
                ))}
              </ul>
              <a href={href} target="_blank" rel="noopener" className="btn-ghost mt-auto self-start"><WaIcon size={18} />{cta}</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
