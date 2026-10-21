import { COMPANY, Contact, mount, type LegalSection } from './Layout';

const sections: LegalSection[] = [
  {
    id: 'who',
    title: 'Who we are',
    body: (
      <>
        <p>Totely is a shopping and delivery service on WhatsApp, operated by <strong>{COMPANY}</strong> (“Totely”, “we”, “us”), Kaduna, Nigeria. We are the data controller for the personal data described in this policy.</p>
        <p>This policy explains what we collect when you use Totely on WhatsApp, our secure web pages, the Totely worker app or this website, why we collect it, who we share it with, and the rights you have under the <strong>Nigeria Data Protection Act 2023</strong> (NDPA).</p>
      </>
    ),
  },
  {
    id: 'collect',
    title: 'What we collect',
    body: (
      <>
        <p><strong>When you set up and use Totely as a customer:</strong></p>
        <ul>
          <li>Your WhatsApp phone number and the name on your WhatsApp profile.</li>
          <li>Your full name, delivery area, address, landmark and, if you choose to share it, your location pin.</li>
          <li>Your preferred language.</li>
          <li>What you send us in the chat: text, voice notes and photos (for example a photo of a handwritten list), and our replies.</li>
          <li>Your orders: items, prices, fees, delivery details, status updates, ratings, reports of problems and the photos you attach.</li>
          <li>Your Totely wallet details: the account number and bank name our partner bank assigns, and records of payments and refunds.</li>
          <li>Your wallet PIN, which we store only as a one-way protected hash. We cannot see or recover your PIN.</li>
        </ul>
        <p><strong>Identity verification.</strong> To open your wallet, you enter your BVN and date of birth on a secure Totely page (never in the chat). We pass them directly to our partner bank for verification and <strong>do not store your BVN or date of birth</strong>. We keep only the verification result and a reference from the bank.</p>
        <p><strong>Photos of your order.</strong> Our shoppers and riders take photos of your items, basket, sealed bag, pickup and handover. A handover photo may show your doorstep or gate. These photos are shown to you on your order page and kept as proof of the order.</p>
        <p><strong>If you work with Totely</strong> (shopper, rider or vendor staff): your name, phone number, work area, guarantor details where required, wallet or settlement account, jobs and earnings, ratings, strikes, the photos you take on jobs, and, while you are online as a rider, your approximate location so we can offer you nearby deliveries and show customers their delivery.</p>
        <p><strong>Technical data.</strong> Basic records such as the time of requests and the device or browser used for our secure pages and worker app, kept for security and fraud prevention. This website does not use advertising or tracking cookies.</p>
      </>
    ),
  },
  {
    id: 'use',
    title: 'Why we use it, and our legal basis',
    body: (
      <table>
        <thead><tr><th>Purpose</th><th>Legal basis (NDPA)</th></tr></thead>
        <tbody>
          <tr><td>Creating your account, understanding your list, pricing, shopping and delivering your order, and keeping you updated</td><td>Performance of our contract with you</td></tr>
          <tr><td>Opening and operating your wallet with our partner bank, taking payments and making refunds</td><td>Contract, and legal obligations (financial and anti-fraud rules)</td></tr>
          <tr><td>Photos at each step, delivery codes, dispute handling and refunds</td><td>Contract, and our legitimate interest in proving what happened</td></tr>
          <tr><td>Paying shoppers, riders and vendors, and offering jobs to nearby riders</td><td>Contract with them</td></tr>
          <tr><td>Security, preventing fraud and abuse, keeping audit records</td><td>Legitimate interests and legal obligations</td></tr>
          <tr><td>Improving how Totely understands lists, voice notes and local terms</td><td>Legitimate interests (we use the minimum data needed)</td></tr>
          <tr><td>Promotional messages</td><td>Your consent, which you can withdraw any time by replying STOP</td></tr>
        </tbody>
      </table>
    ),
  },
  {
    id: 'share',
    title: 'Who we share it with',
    body: (
      <>
        <p>We do not sell your personal data. We share it only as needed to run Totely:</p>
        <ul>
          <li><strong>Your shopper, rider and the vendor</strong> see what they need for your order: your first name, items, delivery address and landmark, and, for the shopper and rider on your order, your phone number to reach you.</li>
          <li><strong>Our partner bank</strong>, which provides and operates your wallet, verifies your identity, and processes payments, refunds and payouts.</li>
          <li><strong>WhatsApp messaging providers</strong>: Meta Platforms (WhatsApp Business) and, where used, Twilio, which carry messages between you and Totely.</li>
          <li><strong>Google (Gemini API)</strong>, which processes the text, voice notes and photos you send so Totely can understand your list. It processes them on our instructions to produce a reply.</li>
          <li><strong>Cloud hosting and infrastructure providers</strong> that store and run our systems under contract.</li>
          <li><strong>Logistics partners</strong>, if one delivers your order: the pickup and drop-off details, and the recipient name and phone number.</li>
          <li><strong>Authorities</strong>, when the law requires it or to protect people from harm or fraud.</li>
        </ul>
        <p>Our service providers may process data outside Nigeria. When they do, we rely on the transfer safeguards the NDPA allows, such as contractual protections, and we share only what the service needs.</p>
      </>
    ),
  },
  {
    id: 'keep',
    title: 'How long we keep it',
    body: (
      <ul>
        <li><strong>Account details</strong>: while your account is open. When you ask us to delete it, we close it and remove or anonymise what we no longer need.</li>
        <li><strong>Orders, payments, refunds and payouts</strong>: for as long as financial, tax and anti-fraud laws require (generally at least five years after the transaction).</li>
        <li><strong>Order photos and dispute records</strong>: for as long as needed to handle questions and disputes about the order, then deleted or kept with the financial records where the law requires.</li>
        <li><strong>Chat messages</strong>: for as long as needed to provide the service and support, and to resolve complaints.</li>
        <li><strong>Login codes and secure links</strong>: they expire within minutes and are never re-sent once expired.</li>
        <li><strong>Rider location</strong>: only the latest position is kept on the rider's profile while they work.</li>
      </ul>
    ),
  },
  {
    id: 'security',
    title: 'How we protect it',
    body: (
      <ul>
        <li>Your PIN is required for every wallet payment and is stored only as a one-way hash, with a lock after repeated wrong attempts.</li>
        <li>Your PIN, BVN and date of birth are entered on a secure page over an encrypted connection, never in the WhatsApp chat.</li>
        <li>Every delivery needs a code that only you receive.</li>
        <li>Staff access is limited by role, and staff actions on accounts and orders are recorded in a tamper-evident audit log.</li>
        <li>Photo links are hard to guess, and we use encryption in transit for our systems.</li>
        <li>If you lose your phone, reply FREEZE or contact us from another phone and we will freeze your account.</li>
      </ul>
    ),
  },
  {
    id: 'rights',
    title: 'Your rights',
    body: (
      <>
        <p>Under the NDPA you can ask us to:</p>
        <ul>
          <li>tell you what personal data we hold about you and give you a copy;</li>
          <li>correct data that is wrong or incomplete (you can update your address yourself by typing ADDRESS);</li>
          <li>delete your data, where we no longer need to keep it by law;</li>
          <li>restrict or object to some uses, including any marketing;</li>
          <li>send your data to you or another provider in a commonly used format;</li>
          <li>withdraw consent you have given, without affecting what was done before.</li>
        </ul>
        <p>To make a request, contact us using the details below. We may need to confirm it is you, and we will reply within the time the law sets. If you are not satisfied with our answer, you can complain to the <strong>Nigeria Data Protection Commission</strong> (NDPC).</p>
      </>
    ),
  },
  {
    id: 'children',
    title: 'Children',
    body: <p>Totely is for adults aged 18 and over. Opening a wallet requires identity verification with a BVN. We do not knowingly collect data from children; if you believe a child has used Totely, contact us and we will remove their data.</p>,
  },
  {
    id: 'changes',
    title: 'Changes to this policy',
    body: <p>We will update this policy when our service or the law changes, and change the effective date above. If a change materially affects how we use your data, we will tell you on WhatsApp before it applies.</p>,
  },
  {
    id: 'contact',
    title: 'Contact us',
    body: <p>For privacy questions or requests: <Contact /></p>,
  },
];

mount({
  title: 'Privacy policy',
  intro: <p>Your privacy matters to us. In short: we collect what we need to shop and deliver your orders and to run your wallet, we never ask for your PIN or BVN in the chat, we do not store your BVN, and we do not sell your data.</p>,
  sections,
  other: { href: '/terms/', label: 'Read our terms of service' },
});
