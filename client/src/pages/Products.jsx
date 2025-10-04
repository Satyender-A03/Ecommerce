import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "../components/card/Card";

const Products = () => {
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  // const [brands, setBrands] = useState("");

  const getProduct = async () => {
    try {
      const response = await fetch(
        "https://ecommerce-6-15vr.onrender.com/products/"
      );
      const data = await response.json();
      console.log(data);
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  const selectProduct = async (id) => {
    navigate(`/singleproduct/${id}`);
  };

  if (product)
    return (
      <div className="w-full p-10 pt-25 bg-gray-200">
        <div className="w-full">
          <div className="w-full flex gap-6">
            <div className="mb-5 text-black flex gap-3">
              <p> PRODUCTS :</p>
              <select
                id="category"
                className="w-40 p-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={product.gender}
                onChange={(e) => setProduct(e.target.value)}
              >
                <option value="all">All Categories</option>
                <option value="men">Men</option>
                <option value="women">Women</option>
              </select>
            </div>
            <div className="mb-5 text-black flex gap-3">
              <p> BRANDS :</p>
              <select
                id="category"
                className="w-40 p-1 border rounded-md focus:outline-none cd focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Brands</option>
                <option value="men">Men</option>
                <option value="women">Women</option>
              </select>
            </div>
          </div>
          <div className="w-full grid grid-rows-2 grid-cols-4 gap-10 overflow-hidden">
            {product.map((product, index) => (
              <Card key={product._id} product={product} index={index} />
            ))}
          </div>
        </div>
      </div>
    );
};

export default Products;
