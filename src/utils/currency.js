/**
 * Helper utility to format numbers as Indian Rupee amounts
 * @param {number} amount - Numeric value to format
 * @returns {string} Formatted rupee string
 */
export const formatRupees = (amount) => {
  return `₹${amount}`;
};
