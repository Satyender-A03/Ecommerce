// const Brand = require("../models/Brand");
const Brand = require("../models/Brand");

const createBrand = async (req, res) => {
  console.log(req.body);
  // console.log("test");

  try {
    const { title, desc } = req.body;
    console.log(req.body);

    if (!title || !desc) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const duplicate = await Brand.findOne({ title });

    if (duplicate) {
      return res.status(400).json({ message: "Brand already exists" });
    }
    const brandObj = {
      image: req.file.filename,
      title,
      desc,
    };

    const brand = new Brand(brandObj);

    await brand.save();

    if (brand) {
      return res.status(200).json({ message: "Brand Added" });
    }
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: "SERVER ERROR" });
  }
};

const getAllBrands = async (req, res) => {
  try {
    const data = await Brand.find({});
    if (!data?.length) {
      return res.status(400).json({ message: "No brands found" });
    }
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "SERVER ERROR" });
  }
};

const getSingleBrand = async (req, res) => {
  try {
    const { id } = req.params;
    const brand = await Brand.findOne({ _id: id });

    if (!brand) {
      return res.status(400).json({ message: "Brand not found" });
    }
    res.json(brand);
  } catch (error) {
    res.status(500).json({ message: "SERVER ERROR" });
  }
};

const updateBrand = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, desc, products } = req.body;
    const brand = await Brand.findOne({ _id: id });
    if (!brand) {
      return res.status(400).json({ message: "Brand not found" });
    }
    const duplicate = await Brand.findOne({ title });

    if (duplicate && duplicate?._id.toString() !== id) {
      return res
        .status(400)
        .json({ message: "Brand with the same name already exists" });
    }
    brand.title = title;
    brand.desc = desc;
    brand.products = products;
    await brand.save();

    return res.status(200).json({ message: "Brand Updated Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "SERVER ERROR" });
  }
};

const deleteBrand = async (req, res) => {
  try {
    const { id } = req.params;
    const del = await Brand.findOneAndDelete({ _id: id });

    res.status(200).json({ message: "Brand deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "SERVER ERROR" });
  }
};

module.exports = {
  createBrand,
  getAllBrands,
  getSingleBrand,
  updateBrand,
  deleteBrand,
};
