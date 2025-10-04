const {
  getAllReviews,
  createReview,
  updateReview,
  getSingleReview,
  deleteReview,
} = require("../controllers/reviewController");
const express = require("express");
const router = express.Router();

router.route("/").get(getAllReviews).post(createReview).patch(updateReview);
router.route("/:id").delete(deleteReview).get(getSingleReview);

module.exports = router;
