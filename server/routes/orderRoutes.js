const {
  getAllOrders,
  createOrder,
  updateOrder,
  getSingleOrder,
  deleteOrder,
} = require("../controllers/orderController");

const express = require("express");
const router = express.Router();
router.route("/").get(getAllOrders).post(createOrder).patch(updateOrder);
router.route("/:id").delete(deleteOrder).get(getSingleOrder);

module.exports = router;
