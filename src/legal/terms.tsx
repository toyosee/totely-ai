import { COMPANY, Contact, mount, type LegalSection } from './Layout';

const sections: LegalSection[] = [
  {
    id: 'about',
    title: 'About these terms',
    body: (
      <>
        <p>These terms are an agreement between you and <strong>{COMPANY}</strong> (“Totely”, “we”, “us”) for using Totely on WhatsApp, our secure web pages and order pages. By tapping “I agree” during setup, or by placing an order, you accept these terms and our <a href="/privacy/">privacy policy</a>.</p>
        <p>Shoppers, riders and vendors who work with Totely also agree to separate terms for that work.</p>
      </>
    ),
  },
  {
    id: 'service',
    title: 'What Totely does',
    body: (
      <>
        <p>Totely helps you buy groceries and household items from markets and supermarkets, and meals from restaurants, by chatting on WhatsApp. A Totely shopper buys your items, or the restaurant prepares your meal, and a rider delivers it to you.</p>
        <p>Totely acts on your behalf in buying from independent vendors. The vendor remains responsible for the goods they sell; Totely is responsible for the service of shopping, checking and delivering them as described in these terms. We operate in the areas listed in the chat, starting in Kaduna.</p>
      </>
    ),
  },
  {
    id: 'account',
    title: 'Your account and wallet',
    body: (
      <ul>
        <li>You must be 18 or older and use your own WhatsApp number. Give accurate details, including your delivery address.</li>
        <li>Your <strong>Totely wallet</strong> is an account provided by our licensed partner bank and is also governed by the bank's terms. Totely does not hold your money. You fund the wallet by bank transfer to its account number.</li>
        <li>Keep your <strong>PIN</strong> secret. Anyone who has your phone and your PIN can pay from your wallet. Totely will never ask for your PIN, BVN or card details in the chat.</li>
        <li>If your phone is lost or you suspect misuse, reply FREEZE or contact us straight away so we can freeze your account.</li>
        <li>We may suspend or close an account used for fraud, abuse of shoppers or riders, or in breach of these terms or the law.</li>
      </ul>
    ),
  },
  {
    id: 'orders',
    title: 'Orders, prices and payment',
    body: (
      <ul>
        <li>Before you pay, the chat shows each item's price, the delivery fee and any service or small-order fee for your area. Your order is placed when you pay.</li>
        <li>Market prices change during the day. If an item turns out <strong>cheaper</strong>, we refund the difference to your wallet. A <strong>small</strong> rise is covered by Totely. A <strong>noticeable</strong> rise needs your OK: you pay the difference from your wallet, or the item is removed and refunded.</li>
        <li>If an item is not available, your shopper may suggest a replacement with a photo, which you can accept or decline. Items that are not bought are refunded.</li>
        <li>If you do not reply to a price or replacement question within the time shown in the chat, the shopper makes a reasonable choice so your order is not held up, and you can still report a problem afterwards.</li>
        <li>You pay from your Totely wallet with your PIN. Where offered, you may instead pay a single order by bank transfer to the account given in the chat for that order, using your order number as the narration; an unpaid order expires after the time shown. A transfer to Totely's own account is confirmed once our team sees it in the bank. Only pay into the account named in your order message: Totely will never send you a different account in a separate message, and is not responsible for money sent to any other account.</li>
        <li>Any tax that applies is shown in the total before you pay.</li>
        <li>When your order is delivered we send a receipt to your WhatsApp chat. Receipts cannot be changed once issued; if something on it is wrong, contact us and we will put it right.</li>
      </ul>
    ),
  },
  {
    id: 'cancel',
    title: 'Cancelling an order',
    body: (
      <ul>
        <li>You can cancel in the chat until a shopper or restaurant starts on your order. If you have already paid, the amount is refunded to your wallet less the processing fee (see below).</li>
        <li>After shopping or cooking has started, contact us; we will help where we can, but items already bought may not be refundable.</li>
        <li>If we cancel your order (for example, no shopper or rider is available), you get a full refund to your wallet.</li>
      </ul>
    ),
  },
  {
    id: 'delivery',
    title: 'Delivery',
    body: (
      <ul>
        <li>Your shopper sends photos as items are bought and of the full basket, and the bag is sealed before collection. These photos come to your WhatsApp chat, and you can also follow your order on the tracking page.</li>
        <li>When the rider arrives, give your <strong>delivery code</strong> only after you have your items. Giving the code confirms you received the order.</li>
        <li>Please be reachable on your phone. If the rider cannot reach you or the address is wrong, we will contact you to arrange another attempt or a return; extra delivery costs may apply.</li>
        <li>Delivery times shown are estimates and can be affected by traffic, weather or market conditions.</li>
      </ul>
    ),
  },
  {
    id: 'problems',
    title: 'Problems and refunds',
    body: (
      <>
        <ul>
          <li>If something is missing, wrong, damaged or not as expected, report it from your order page within <strong>24 hours of delivery</strong>, with a photo if you can. We review the order photos and your report and reply on WhatsApp.</li>
          <li>Approved refunds, and refunds for items not bought, are paid to your <strong>Totely wallet</strong>.</li>
          <li>A <strong>processing fee</strong> is deducted from refunds to cover payment and handling costs. The amount is shown when the refund is made. There is no fee when Totely, our shopper or rider, or the vendor was at fault.</li>
          <li>Where it fits better, we may redeliver an item instead of refunding it.</li>
        </ul>
        <p>Nothing in these terms limits rights you have under Nigerian consumer protection law, including the Federal Competition and Consumer Protection Act.</p>
      </>
    ),
  },
  {
    id: 'messages',
    title: 'Messages from Totely',
    body: (
      <ul>
        <li>We message you on WhatsApp about your account and orders, including photos, payment requests, receipts and delivery updates.</li>
        <li>Offers, new stores and news about areas we are opening are sent only if you agree, at most a couple of messages a week. Reply <strong>STOP</strong> at any time to stop them; order messages continue.</li>
        <li>Some offers are paid promotions from vendors on Totely. These are labelled as sponsored. Prices and terms in an offer are set by the vendor and apply when you order.</li>
      </ul>
    ),
  },
  {
    id: 'conduct',
    title: 'Using Totely fairly',
    body: (
      <>
        <p>Please do not:</p>
        <ul>
          <li>order anything illegal, or items a vendor may not lawfully sell to you;</li>
          <li>abuse, threaten or harass shoppers, riders, vendors or our team;</li>
          <li>give false reports, misuse refunds, or try to get around payments or delivery codes;</li>
          <li>interfere with, copy or try to break into our systems.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'liability',
    title: 'Our responsibility to you',
    body: (
      <>
        <p>We take reasonable care in shopping, checking and delivering your order. If we fail to do so, our responsibility for any order is limited to the amount you paid for it, as a refund, replacement or redelivery.</p>
        <p>We are not responsible for delays or failures caused by events outside our reasonable control, such as network or bank outages, strikes, unrest or severe weather, or for losses that come from someone else using your PIN. Nothing here limits liability that cannot be limited by law.</p>
      </>
    ),
  },
  {
    id: 'changes',
    title: 'Changes, law and disputes',
    body: (
      <>
        <p>We may update these terms as Totely grows. We will change the effective date above and, for important changes, tell you on WhatsApp before they apply. If you keep using Totely after that, the new terms apply.</p>
        <p>These terms are governed by the laws of the Federal Republic of Nigeria. If you have a complaint, please contact us first so we can try to resolve it. If we cannot, disputes will be handled by the courts of Kaduna State, Nigeria.</p>
      </>
    ),
  },
  {
    id: 'contact',
    title: 'Contact us',
    body: <p><Contact /></p>,
  },
];

mount({
  title: 'Terms of service',
  intro: <p>The short version: you see the full price before you pay, nothing costs more than you approved, you get photos at every step, you can report a problem within 24 hours, and refunds go to your Totely wallet.</p>,
  sections,
  other: { href: '/privacy/', label: 'Read our privacy policy' },
});
