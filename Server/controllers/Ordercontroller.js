const Order = require('../models/Order');
const Cart = require('../models/Cart');

const createOrder = async (req, res) => {
  try {
    const { orderItems, shippingAddress, paymentResult, itemsPrice, totalPrice } = req.body;
    const userId = req.user._id;

    if (orderItems && orderItems.length === 0) {
      return res.status(400).json({ message: 'No order items' });
    }
    const order = new Order({
      user: userId,
      orderItems,
      shippingAddress,
      paymentMethod: 'Paystack',
      paymentResult,
      itemsPrice,
      totalPrice,
      isPaid: true,     
      paidAt: Date.now() 
    });

    const createdOrder = await order.save();
    await Cart.findOneAndUpdate({ user: userId }, { items: [] });

    return res.status(201).json(createdOrder);

  } catch (error) {
    console.error("Order creation error:", error);
    return res.status(500).json({ message: "Server error creating order" });
  }
};

module.exports = { createOrder };