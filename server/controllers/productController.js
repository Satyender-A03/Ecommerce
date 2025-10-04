const Product = require("../models/Product");
const Brand = require("../models/Brand");

const createProduct = async (req, res) => {
  try {
    console.log("test");
    console.log(req.body);
    const {
      // image,
      title,
      desc,
      price,
      discount,
      color,
      size,
      category,
      gender,
      qty,
      brand,
      //   order,
      //   reviews,
    } = req.body;

    if (
      // !image ||
      !title ||
      !desc ||
      !price ||
      !color ||
      !discount ||
      !size ||
      !category ||
      !gender ||
      !qty ||
      !brand
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const duplicate = await Product.findOne({ title });

    if (duplicate) {
      return res.status(400).json({ message: "Product already exists" });
    }

    const productObj = {
      image: req.file.filename,
      title,
      desc,
      price,
      discount,
      color,
      size,
      category,
      gender,
      qty,
      brand,
    };
    const product = new Product(productObj);
    await product.save();

    const brandObj = await Brand.findOne({ _id: brand });

    if (product) {
      brandObj.products.push(product._id);

      await brandObj.save();

      return res.status(200).json({ message: "PRODUCT ADDED" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server ERROR" });
  }
};

// console.log("run");
const getAllProducts = async (req, res) => {
  try {
    const data = await Product.find({});
    if (!data?.length) {
      return res.status(400).json({ message: "No products found" });
    }
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "SERVER ERROR" });
  }
};

const getSingleProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findOne({ _id: id });

    if (!product) {
      return res.status(400).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "SERVER ERROR" });
  }
};
const updateProduct = async (req, res) => {
  try {
    const {
      // id,
      title,
      desc,
      price,
      discount,
      color,
      size,
      category,
      gender,
      qty,
      brand,
    } = req.body;
    const id = req.params.id;
    const product = await Product.findOne({ _id: id });

    if (!product) {
      return res.status(400).json({ message: "Product not found" });
    }
    const duplicate = await Product.findOne({ title });

    if (duplicate && duplicate?._id.toString() !== id) {
      return res
        .status(400)
        .json({ message: "Product with the same name already exists" });
    }
    if (req?.image) {
      product.image = req.file.filename;
    }
    // product.image = image;
    product.id = id;
    product.title = title;
    product.desc = desc;
    product.price = price;
    product.discount = discount;
    product.color = color;
    product.size = size;
    product.category = category;
    product.gender = gender;
    product.qty = qty;
    product.brand = brand;

    await product.save();

    res.status(200).json({ message: "Product updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "SERVER ERROR" });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const del = await Product.findOneAndDelete({ _id: id });

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "SERVER ERROR" });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
