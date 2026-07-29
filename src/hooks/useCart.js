import { useState } from 'react';
import { menuItems } from '../data/menuData';

/**
 * Custom React hook to manage quantity-based cart selections
 * @returns {object} Cart operations, itemized list, and summaries
 */
export const useCart = () => {
  const [cart, setCart] = useState({});

  // Add, increment, decrement or remove item
  const updateQuantity = (itemId, change) => {
    setCart((prev) => {
      const currentQty = prev[itemId] || 0;
      const newQty = currentQty + change;
      const updated = { ...prev };
      
      if (newQty <= 0) {
        delete updated[itemId];
      } else {
        updated[itemId] = newQty;
      }
      return updated;
    });
  };

  // Reset cart selection
  const clearCart = () => {
    setCart({});
  };

  // Convert map key-values to detailed item objects
  const getSelectedList = () => {
    return Object.entries(cart)
      .map(([id, quantity]) => {
        const item = menuItems.find(i => i.id === parseInt(id));
        return { item, quantity };
      })
      .filter(entry => entry.item !== undefined);
  };

  const selectedList = getSelectedList();
  
  // Calculate total counts and total rupees spent
  const totalCount = selectedList.reduce((acc, entry) => acc + entry.quantity, 0);
  const totalPrice = selectedList.reduce((acc, entry) => acc + (entry.item.price * entry.quantity), 0);

  return {
    cart,
    selectedList,
    updateQuantity,
    clearCart,
    totalCount,
    totalPrice
  };
};
