"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Header from '@/components/ShopHeader';

const ShoppingCart = () => {
  interface CartItem {
    _id: string;
    productImage: string;
    title: string;
    description: string;
    price: number;
    discountpercentage?: number;
  }

  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    // Fetch cart items from local storage or an API
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    setCartItems(storedCartItems);
  }, []);

  const removeItem = (id: any) => {
    const updatedCartItems = cartItems.filter(item => item._id !== id);
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-4">
        <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <ul className="space-y-4">
            {cartItems.map(item => (
              <li key={item._id} className="flex items-center bg-white p-4 shadow rounded">
                <Image src={item.productImage} alt={item.title} width={150} height={100} className="w-32 h-20 object-cover mr-4" />
                <div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                  <p className="text-gray-900">Price: {item.price}</p>
                  {item.discountpercentage && <p className="text-red-500">Discount: {item.discountpercentage}%</p>}
                  <button onClick={() => removeItem(item._id)} className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
};

export default ShoppingCart;
