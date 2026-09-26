/**
 * Shares product using native Web Share API with clipboard fallback
 */
export async function shareProduct(name: string, url: string): Promise<{ success: boolean; method: 'share' | 'clipboard' }> {
  const shareData = {
    title: `${name} — Shri Vijaya Kitchenware`,
    text: `Check out ${name} on Shri Vijaya Kitchenware Digital Catalog:`,
    url: url
  };

  if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
    try {
      await navigator.share(shareData);
      return { success: true, method: 'share' };
    } catch (err) {
      // User cancelled or share failed, fallback to copy link
    }
  }

  // Clipboard fallback
  try {
    await navigator.clipboard.writeText(url);
    return { success: true, method: 'clipboard' };
  } catch (err) {
    return { success: false, method: 'clipboard' };
  }
}
