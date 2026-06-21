export function useWhatsAppLink(phoneNumber: string = '2348069213941') {
  const baseUrl = 'https://wa.me';
  const message = 'Hi%20Totely%20👋%20I%27d%20like%20to%20start%20shopping%21';
  return `${baseUrl}/${phoneNumber}?text=${message}`;
}