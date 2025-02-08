import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CartContextType {
  items: any[];
  addToCart: (item: any) => void;
  addtoWishList: (item: any) => void; // Add this line
  removeItem: (id: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [items, setItems] = useState<any[]>([]);

  const addToCart = (item: any) => {
    setItems([...items, item]);
  };

  const addtoWishList = (item: any) => {
    // Implement the logic for adding to wishlist
  };

  const removeItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ items, addToCart, addtoWishList, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};