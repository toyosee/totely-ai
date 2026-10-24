/* eslint-disable react-refresh/only-export-components -- page entry helpers, not hot-reloaded components */
import { StrictMode, type ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import '../index.css';
import { Header } from '../sections/Top';
import { Footer } from '../sections/Bottom';
import { WA, WHATSAPP_NUMBER } from '../lib';

export interface LegalSection {
  id: string;
  title: string;
  body: ReactNode;
}

export const EFFECTIVE = '21 October 2026';
export const COMPANY = 'Barterverse Technologies Ltd';
export const PHONE = `+${WHATSAPP_NUMBER.slice(0, 3)} ${WHATSAPP_NUMBER.slice(3, 6)} ${WHATSAPP_NUMBER.slice(6, 9)} ${WHATSAPP_NUMBER.slice(9)}`;

/** Contact line used in both documents. */
export function Contact() {
  return (
    <>
      WhatsApp <a href={WA.start} target="_blank" rel="noopener">{PHONE}</a> (type HELP to reach a person), {COMPANY}, Abuja, Nigeria.
    </>
  );
}

function LegalPage({ title, intro, sections, other }: { title: string; intro: ReactNode; sections: LegalSection[]; other: { href: string; label: string } }) {
  return (
    <>
      <Header />
      <main id="main" className="bg-white">
        <div className="border-b border-line bg-paper">
          <div className="wrap py-14 sm:py-20">
            <p className="kicker">Legal</p>
            <h1 className="mt-2 text-4xl font-extrabold leading-[1.05] sm:text-5xl">{title}</h1>
            <p className="mt-4 text-ink-soft">Effective {EFFECTIVE}. {COMPANY}, Abuja, Nigeria.</p>
          </div>
        </div>
        <div className="wrap grid gap-12 py-14 lg:grid-cols-[230px_1fr] lg:gap-16">
          <nav aria-label="On this page" className="lg:sticky lg:top-24 lg:self-start">
            <p className="text-sm font-semibold text-ink-mute">On this page</p>
            <ol className="mt-3 space-y-2 text-[15px]">
              {sections.map((s, i) => (
                <li key={s.id}><a className="text-ink-soft hover:text-totely" href={`#${s.id}`}><span className="num mr-2 text-ink-mute">{i + 1}.</span>{s.title}</a></li>
              ))}
            </ol>
            <a className="mt-6 inline-block text-[15px] font-semibold text-totely hover:underline" href={other.href}>{other.label}</a>
          </nav>
          <article className="legal max-w-3xl">
            <div className="text-lg text-ink-soft">{intro}</div>
            {sections.map((s, i) => (
              <section key={s.id} id={s.id} className="mt-12 scroll-mt-24">
                <h2 className="text-2xl font-bold"><span className="num mr-2 text-ink-mute">{i + 1}.</span>{s.title}</h2>
                <div className="mt-4 space-y-4 text-ink-soft">{s.body}</div>
              </section>
            ))}
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}

export function mount(props: Parameters<typeof LegalPage>[0]) {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <LegalPage {...props} />
    </StrictMode>,
  );
}
