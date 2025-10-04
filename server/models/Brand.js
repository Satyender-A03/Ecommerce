const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    // required: true,
  },
  desc: {
    type: String,
    required: true,
  },

  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      // type: String,
      // required: false,
      ref: "Product",
    },
  ],
});
const Brand = mongoose.model("Brand", brandSchema);
module.exports = Brand;
