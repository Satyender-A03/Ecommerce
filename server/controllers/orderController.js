// const Order = require('../models/orderModel');
const Order = require("../models/Order");

const createOrder = async (req, res) => {
  try {
    const { userId, productId, price, qty, color, paymentId } = req.body;
    if (!userId || !productId || !price || !qty || !color || !paymentId) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const orderObj = {
      userId,
      productId,
      price,
      qty,
      color,
      paymentId,
    };

    const order = new Order(orderObj);

    await order.save();

    if (order) {
      return res.status(200).json({ message: "Order Added" });
    }
  } catch (error) {
    res.status(500).json({ message: "SERVER ERROR" });
  }
};

const getAllOrders = async (req, res) => {
  try {
    const data = await Order.find({});
    if (!data?.length) {
      return res.status(400).json({ message: "No orders found" });
    }
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "SERVER ERROR" });
  }
};

const getSingleOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findOne({ _id: id });
    if (!order) {
      return res.status(400).json({ message: "Order not found" });
    }
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: "SERVER ERROR" });
  }
};

const updateOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId, productId, price, qty, color, paymentId } = req.body;
    const order = await Order.findOne({ _id: id });
    if (!order) {
      return res.status(400).json({ message: "Order not found" });
    }

    (Order.userId = userId),
      (Order.productId = productId),
      (Order.price = price),
      (Order.qty = qty),
      (Order.color = color),
      (Order.paymentId = paymentId);

    await order.save();

    return res.ststus(200).json({ message: "Order Updated Successfully" });
  } catch (error) {
    res.status(500).json({ message: "SEVER ERROR" });
  }
};

const deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findOneAndDelete({ _id: id });

    res.status(200).json({ message: "Order deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: "SERVER ERROR" });
  }
};

module.exports = {
  createOrder,
  getAllOrders,
  getSingleOrder,
  updateOrder,
  deleteOrder,
};
