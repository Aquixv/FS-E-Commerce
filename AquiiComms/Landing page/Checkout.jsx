import React from 'react';
import { useCart } from '../src/CartContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();

  const calculateTotal = () => {
    if (!cart || !cart.items) return 0;
    return cart.items.reduce((total, item) => {
      return total + (item.product.price * item.quantity);
    }, 0).toFixed(2);
  };

  if (!cart || !cart.items || cart.items.length === 0) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h2>Your Cart is Empty</h2>
        <button onClick={() => navigate('/')}>Continue Shopping</button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1>Your Cart</h1>
      
      <div style={{ borderTop: '1px solid #ccc' }}>
        {cart.items.map((item) => (
          <div 
            key={item.product._id} 
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px 0', borderBottom: '1px solid #eee' }}
          >
            <img src={item.product.image} alt={item.product.name} style={{ width: '80px', height: '80px', objectFit: 'cover' }} />
            
            <div style={{ flex: 1, paddingLeft: '20px' }}>
              <h3 style={{ margin: '0 0 5px 0' }}>{item.product.name}</h3>
              <p style={{ margin: 0 }}>Qty: {item.quantity}</p>
            </div>

            <div style={{ textAlign: 'right' }}>
              <p style={{ fontWeight: 'bold' }}>${(item.product.price * item.quantity).toFixed(2)}</p>
              <button 
                onClick={() => removeFromCart(item.product._id)}
                style={{ background: '#ff4d4f', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer' }}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '30px', textAlign: 'right' }}>
        <h2>Total: ${calculateTotal()}</h2>
        <button 
          style={{ background: '#4CAF50', color: 'white', border: 'none', padding: '15px 30px', fontSize: '18px', borderRadius: '5px', cursor: 'pointer' }}
          onClick={() => alert("Checkout Logic Coming Soon!")}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;