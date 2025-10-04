const multer = require("multer");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  getSingleProduct,
  deleteProduct,
} = require("../controllers/productController");
const router = require("express").Router();

router.route("/").get(getAllProducts);
router.route("/:id").delete(deleteProduct).get(getSingleProduct);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024,
  },
});
router.route("/upload").post(upload.single("image"), createProduct);

router.route("/:id").patch(upload.single("image"), updateProduct);

module.exports = router;
