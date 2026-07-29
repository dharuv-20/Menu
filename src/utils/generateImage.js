import html2canvas from 'html2canvas';

/**
 * Capture a target element and output a high-DPI PNG data URL.
 * @param {HTMLElement} element - The DOM node to capture.
 * @returns {Promise<string>} Base64 image data URL.
 */
export const generateImageFromElement = async (element) => {
  if (!element) {
    throw new Error("Target element not found for receipt capture.");
  }

  // Generate high quality canvas rendering of the invoice
  const canvas = await html2canvas(element, {
    useCORS: true,
    allowTaint: true,
    scale: 2, // Double DPI resolution to keep text crisp on high-res displays
    backgroundColor: '#F7EEDB', // Tatsaaraa Kavan vintage paper color base
    logging: false,
    onclone: (clonedDoc) => {
      // Find the cloned node and make sure it is visible in the canvas rendering scope
      const clonedNode = clonedDoc.getElementById(element.id);
      if (clonedNode) {
        clonedNode.style.position = 'relative';
        clonedNode.style.left = '0';
        clonedNode.style.top = '0';
        clonedNode.style.margin = '0';
      }
    }
  });

  return canvas.toDataURL('image/png');
};
