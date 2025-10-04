const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  image: [
    {
      type: String,
      required: true,
    },
  ],
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    required: false,
  },
  color: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  qty: {
    type: Number,
    required: true,
  },
  brand: {
    type: mongoose.Schema.Types.ObjectId,
    // type: String,
    // required: true,
    ref: "Brand",
    required: true,
  },
  order: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Reviews",
    },
  ],
});
const Product = mongoose.model("Products", productSchema);
module.exports = Product;
