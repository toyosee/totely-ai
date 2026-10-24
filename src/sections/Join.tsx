import { WaIcon } from '../art/Brand';
import { WA } from '../lib';

/** What happens after someone asks to join. Mirrors the WhatsApp application flow in the Totely app. */
const JOIN = [
  { title: 'Message us', text: 'Tap a button above, or just tell Totely on WhatsApp you want to be a vendor, shopper or rider.' },
  { title: 'We open your application', text: 'You get a reply in the chat straight away, and our team reviews your request.' },
  { title: 'Verification', text: 'We contact you with the requirements, usually a valid ID and a few documents, and where to send them.' },
  { title: 'Start earning', text: 'Once approved, we set you up and you gain access to the Totely app.' },
];

export function JoinSteps() {
  return (
    <div className="mt-10 rounded-2xl bg-paper p-6 sm:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h3 className="text-2xl font-bold">How joining works</h3>
          <p className="mt-1 max-w-2xl text-ink-soft">No forms or websites to fill. It all starts with a WhatsApp message.</p>
        </div>
        <a href={WA.start} target="_blank" rel="noopener" className="btn-wa shrink-0 self-start sm:self-auto"><WaIcon />Message us to apply</a>
      </div>
      <ol className="mt-8 grid gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
        {JOIN.map((s, i) => (
          <li key={s.title} className="flex gap-3">
            <span className="num flex size-8 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-totely ring-1 ring-line">{i + 1}</span>
            <span>
              <span className="block font-bold">{s.title}</span>
              <span className="mt-1 block text-[15px] text-ink-soft">{s.text}</span>
            </span>
          </li>
        ))}
      </ol>
      <p className="mt-8 border-t border-line pt-5 text-[15px] text-ink-soft">
        Missing a document? Send it when you have it and we'll reopen your application. We will never ask for your BVN, PIN or bank password.
      </p>
    </div>
  );
}
