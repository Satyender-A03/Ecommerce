const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fName: {
    type: String,
    required: true,
  },
  lName: {
    type: String,
    required: true,
  },
  uName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Reviews",
    },
  ],
  orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
    },
  ],

  isAdmin: {
    type: Boolean,
    required: false,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;

//   "firstName": "John",
//   "lastName": "Doe",
//   "userName": "johnnydoe",
//   "email": "john@example.com",
//   "password": "john@1234"
