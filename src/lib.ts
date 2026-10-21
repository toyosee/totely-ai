/** Totely's WhatsApp number (international format, no +). */
export const WHATSAPP_NUMBER = '2348069213941';

/** wa.me link that opens a chat with Totely, with a message ready to send. */
export const waLink = (text = 'Hi Totely') => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

export const WA = {
  start: waLink('Hi Totely'),
  vendor: waLink("Hi Totely, I'd like to sell on Totely (store / restaurant)"),
  agent: waLink("Hi Totely, I'd like to become a Totely shopper (agent)"),
  rider: waLink("Hi Totely, I'd like to deliver for Totely (rider)"),
  area: waLink("Hi Totely, I'd like you to deliver to my area: "),
};
