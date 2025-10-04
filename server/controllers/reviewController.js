const Review = require("../models/Reviews");

const createReview = async (req, res) => {
  try {
    const { userId, productId, rating, reviews } = req.body;
    if (!userId || !productId || !rating || !reviews) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const duplicate = await Product.findOne({ userId });

    if (duplicate) {
      return res.status(400).json({ message: "Review already exists" });
    }

    const reviewObj = {
      userId,
      productId,
      rating,
      reviews,
    };

    const order = new reviews(reviewObj);

    await reviews.save();

    if (reviews) {
      return res.status(200).json({ message: "Review is Added" });
    }
  } catch (error) {
    res.status(500).json({ message: "SERVER ERROR" });
  }
};

const getAllReviews = async (req, res) => {
  try {
    const data = await Review.find({});

    if (!data?.length) {
      return res.status(400).json({ message: "No Review Found" });
    }
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "SERVER ERROR" });
  }
};

const getSingleReview = async (req, res) => {
  try {
    const { id } = req.params;
    const review = await Review.findOne({ _id: id });

    if (!review) {
      return res.status(400).json({ message: "Product not found" });
    }
    res.json(review);
  } catch (error) {
    res.status(500).json({ message: "SERVER ERROR" });
  }
};

const updateReview = async (req, res) => {
  try {
    const { userId, productId, rating, reviews } = req.body;
    const review = await Review.findOne({ _id: id });
    if (!review) {
      return res.status(400).json({ message: "Review not found" });
    }

    const duplicate = await Review.findOne(userId);
    if (duplicate) {
      return res
        .status(400)
        .json({ message: "Review with same user already exist " });
    }

    review.userId = userId;
    review.product = productId;
    review.rating = rating;
    review.review = reviews;

    await review.save();

    res.status(200).json({ message: "Review updated Successfully" });
  } catch (error) {
    res.status(500).json({ message: "SERVER ERROR" });
  }
};

const deleteReview = async (req, res) => {
  try {
    const { id } = req.params;
    const del = await Review.findOneAndDelete({ _id: id });
    res.status(200).json({ message: "Review delete successfully" });
  } catch (error) {
    res.status(500).json({ message: "SERVER ERROR" });
  }
};

module.exports = {
  createReview,
  getAllReviews,
  getSingleReview,
  updateReview,
  deleteReview,
};
