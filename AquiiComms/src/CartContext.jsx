import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(null);
  const cartCount = cart?.items?.reduce((total, item) => total + item.quantity, 0) || 0;

  const fetchCart = async () => {
    try {
      const userInfo = JSON.parse(localStorage.getItem('userInfo'));
      if (!userInfo || !userInfo.token) return; 

      const response = await fetch('http://localhost:1500/api/users/auth/cart', {
        headers: {
          Authorization: `Bearer ${userInfo.token}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        setCart(data);
      }
    } catch (error) {
      console.error("Failed to fetch cart", error);
    }
  };
  const addToCart = async (productId, quantity = 1) => {
    try {
      const userInfo = JSON.parse(localStorage.getItem('userInfo'));
      if (!userInfo || !userInfo.token) {
        alert("Please log in to add items to your cart!");
        return;
      }

      const response = await fetch('http://localhost:1500/api/users/auth/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`
        },
        body: JSON.stringify({ productId, quantity })
      });

      if (response.ok) {
        fetchCart(); 
      }
    } catch (error) {
      console.error("Failed to add to cart", error);
    }
  };
  useEffect(() => {
    fetchCart();
  }, []);
const removeFromCart = async (productId) => {
    try {
      const userInfo = JSON.parse(localStorage.getItem('userInfo'));
      if (!userInfo || !userInfo.token) return;
      const response = await fetch(`http://localhost:1500/api/users/auth/cart/${productId}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${userInfo.token}` }
      });

      if (response.ok) {
        fetchCart();
      }
    } catch (error) {
      console.error("Failed to remove item", error);
    }
  };

  return (
    <CartContext.Provider value={{ cart, cartCount, addToCart, removeFromCart, fetchCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);