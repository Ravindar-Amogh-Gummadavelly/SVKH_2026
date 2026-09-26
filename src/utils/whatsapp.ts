import { STORE_INFO } from '../data/storeInfo';

/**
 * Builds dynamic WhatsApp web link with encoded custom pre-filled message
 */
export function getWhatsAppUrl(productName?: string): string {
  const phone = STORE_INFO.whatsappNumber;
  let text = 'Hello Shree Vijaya Kitchenware, can I get information about the products?';

  if (productName) {
    text = `Hello Shree Vijaya Kitchenware, can I get details about the ${productName}?`;
  }

  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

/**
 * Builds tel: phone link for dialer
 */
export function getCallUrl(): string {
  return `tel:${STORE_INFO.formattedPhone}`;
}
