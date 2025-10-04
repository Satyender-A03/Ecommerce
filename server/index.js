const dotenv = require("dotenv");
dotenv.config("./.env");
const multer = require("multer");
const express = require("express");
const bodyPareser = require("body-parser");
const cors = require("cors");
const path = require("path");
// const Razorpay = require("razorpay");
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const brandRoutes = require("./routes/brandRoutes");
const orderRoutes = require("./routes/orderRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const connection = require("./config/connection");
const app = express();
app.use(bodyPareser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("SERVER HOME");
});

app.use(express.static(path.join(__dirname, "upload")));

//payment
// app.post("/payment", async (req, res) => {
//   const instance = new Razorpay({
//     key_id: "rzp_test_3WbPzeexWFf3Wx",
//     key_secret: "rmqFwXefGDhqePUbLLjIBRtL",
//   });

//   const options = {
//     amount: 100 * 100,
//     currency: "INR",
//     receipt: crypto.randomBytes(10).toString("hex"),
//   };

//   const order = await instance.orders.create(options);

//   if (!order) {
//     return res.status(400).json({ message: "ORDER COULD NOT BE CREATED" });
//   }

//   res.json(order);
// });

//ROUTING
app.use("/payment", paymentRoutes);
app.use("/auth", authRoutes);
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);
app.use("/brands", brandRoutes);
app.use("/reviews", reviewRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server Started Successfully");
});
