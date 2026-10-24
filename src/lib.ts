/** Totely's WhatsApp number (international format, no +). */
export const WHATSAPP_NUMBER = '2348069213941';

/** wa.me link that opens a chat with Totely, with a message ready to send. */
export const waLink = (text = 'Hi Totely') => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

/** Public support email. Leave empty to hide it; set it to the same address as Settings → Support email. */
export const SUPPORT_EMAIL = '';

export const WA = {
  start: waLink('Hi Totely'),
  vendor: waLink("Hi Totely, I'd like to sell on Totely (store / restaurant)"),
  agent: waLink("Hi Totely, I'd like to become a Totely shopper (agent)"),
  rider: waLink("Hi Totely, I'd like to deliver for Totely (rider)"),
  advertise: waLink("Hi Totely, I'd like to sell on Totely and promote my store to customers"),
  area: waLink("Hi Totely, I'd like you to deliver to my area: "),
};
