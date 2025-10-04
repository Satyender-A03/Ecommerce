import React, { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import { IoMdImages } from "react-icons/io";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import { useParams } from "react-router-dom";

const UpdateProduct = () => {
  const navigate = useNavigate();

  const [productData, setProductData] = useState(null);
  const { id } = useParams();
  const updateProduct = async () => {
    try {
      const response = await fetch(`http://localhost:5000/products/${id}`);
      const data = await response.json();
      console.log(data);
      setProductData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    updateProduct();
  }, []);

  const [brands, setBrands] = useState(null);
  const getBrands = async () => {
    try {
      const response = await fetch("http://localhost:5000/brands");
      const data = await response.json();
      console.log(data);
      setBrands(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getBrands();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("id", productData._id);
      formData.append("title", productData.title);
      formData.append("qty", productData.qty);
      formData.append("brand", productData.brand);
      formData.append("price", productData.price);
      formData.append("category", productData.category);
      formData.append("gender", productData.gender);
      formData.append("discount", productData.discount);
      formData.append("color", productData.color);
      formData.append("size", productData.size);
      formData.append("image", productData.image);
      formData.append("desc", productData.desc);
      console.log(productData);
      for (var key of formData.entries()) {
        console.log(key[0] + "," + key[1]);
      }
      const response = await fetch(`http://localhost:5000/products/${id}`, {
        method: "PATCH",
        body: formData,
      });
      const data = await response.json();
      console.log(data);
      navigate(`/productmanage`);
    } catch (error) {
      console.log(error);
    }
  };
  if (productData)
    return (
      <div className="w-[80%] ml-[20%] bg-[#15171cfc] p-2 flex flex-col justify-center items-center">
        <div className="w-full text-white p-3 rounded-lg flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold">Add New Product</h2>
            </div>
            <div className="p-2 flex gap-4">
              <button className="bg-gray-700 hover:bg-red-600 font-bold p-3 rounded-md text-center flex gap-3 items-center">
                <MdDelete />
                Delete
              </button>
              <button
                type="submit"
                onClick={handleSubmit}
                className="hover:bg-blue-600 bg-gray-700 font-bold p-3 rounded-md text-center flex gap-3 items-center"
              >
                <FaCheck /> Update Product
              </button>
            </div>
          </div>

          <div className="w-full ">
            <div className="flex gap-5">
              <div className="w-[65%] space-y-4">
                <div className="w-full bg-gray-800 p-4 rounded-xl space-y-2">
                  <h1 className="text-2xl font-bold">General Information</h1>
                  <div className="w-full flex flex-col gap-2">
                    <p className="text-xl">Name Product</p>
                    <input
                      type="text"
                      placeholder="Title"
                      className="p-3 w-full border bg-gray-700 border-gray-400 rounded-xl"
                      onChange={(e) => {
                        setProductData({
                          ...productData,
                          title: e.target.value,
                        });
                        console.log(e.target.value);
                      }}
                      value={productData.title}
                    />
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <p className="text-xl">Discription Product</p>
                    <input
                      type="text"
                      placeholder="Discription"
                      className="w-full h-29 text-sm border bg-gray-700 border-gray-400 rounded-xl p-3"
                      onChange={(e) => {
                        setProductData({
                          ...productData,
                          desc: e.target.value,
                        });
                        console.log(e.target.value);
                      }}
                      value={productData.desc}
                    />
                  </div>

                  <div className="w-full flex gap-5">
                    <div className="w-[50%] flex flex-col gap-1">
                      <h1 className="text-xl">Size</h1>
                      <div className="w-full flex flex-col gap-2">
                        <p className="text-xs text-gray-400">
                          Pick Available Size
                        </p>
                        <div className="w-full flex gap-7">
                          <select
                            type="text"
                            placeholder="XL"
                            name="size"
                            className="p-3 w-full border bg-gray-700 border-gray-400 rounded-xl"
                            onChange={(e) => {
                              setProductData({
                                ...productData,
                                size: e.target.value,
                              });
                              console.log(e.target.value);
                            }}
                          >
                            <option value="">Select Size</option>
                            <option value="S">S</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                            <option value="XXL">XXL</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="w-[50%] flex flex-col gap-1 justify-center">
                      <div className="mb-2">
                        <h2 className="text-sm font-semibold">Gender</h2>
                        <p className="text-xs text-gray-400">
                          Pick Available Gender
                        </p>
                      </div>
                      <div className="flex justify-around items-center">
                        <select
                          type="text"
                          placeholder="Male"
                          name="Gender"
                          className="p-3 w-full border bg-gray-700 border-gray-400 rounded-xl"
                          onChange={(e) => {
                            setProductData({
                              ...productData,
                              gender: e.target.value,
                            });
                            console.log(e.target.value);
                          }}
                        >
                          <option value="none">Select Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full bg-gray-800 rounded-xl p-5 space-y-2">
                  <div className="w-[full] flex gap-5 justify-between items-center">
                    <div className="w-[50%]">
                      <p> Price</p>
                      <input
                        type="text"
                        placeholder="$66.75"
                        name="Price"
                        className="p-3 w-full border bg-gray-700 border-gray-400 rounded-xl"
                        onChange={(e) => {
                          setProductData({
                            ...productData,
                            price: e.target.value,
                          });
                          console.log(e.target.value);
                        }}
                        value={productData.price}
                      />
                    </div>
                    <div className="w-[50%]">
                      <p> Brand</p>
                      <select
                        type="text"
                        placeholder="NIKE"
                        name="brand"
                        className="p-3 w-full border bg-gray-700 border-gray-400 rounded-xl"
                        onChange={(e) => {
                          setProductData({
                            ...productData,
                            brand: e.target.value,
                          });
                          console.log(e.target.value);
                        }}
                        value={productData.brand}
                      >
                        <option value="none">Select Brand</option>
                        {brands &&
                          brands.map((brand) => (
                            <option value={brand._id} key={brand._id}>
                              {brand.title}
                            </option>
                          ))}
                      </select>
                    </div>
                  </div>
                  <div className="w-full flex gap-5 justify-between items-center">
                    <div className="w-[50%]">
                      <p>Discount </p>
                      <input
                        type="text"
                        placeholder="$5.7"
                        name="Discount"
                        className="p-3 w-full border bg-gray-700 border-gray-400 rounded-xl"
                        onChange={(e) => {
                          setProductData({
                            ...productData,
                            discount: e.target.value,
                          });
                          console.log(e.target.value);
                        }}
                        value={productData.discount}
                      />
                    </div>
                    <div className="w-[50%]">
                      <p> QTY</p>
                      <input
                        type="text"
                        placeholder="34"
                        name="Qty"
                        className="p-3 w-full border bg-gray-700 border-gray-400 rounded-xl"
                        onChange={(e) => {
                          setProductData({
                            ...productData,
                            qty: e.target.value,
                          });
                          console.log(e.target.value);
                        }}
                        value={productData.qty}
                      />
                    </div>
                  </div>
                  <div className="w-full flex gap-5 justify-between items-center">
                    <div className="w-full">
                      <p>Color </p>
                      <input
                        type="text"
                        placeholder="RED"
                        name="Color"
                        className="p-3 w-full border bg-gray-700 border-gray-400 rounded-xl"
                        onChange={(e) => {
                          setProductData({
                            ...productData,
                            color: e.target.value,
                          });
                          console.log(e.target.value);
                        }}
                        value={productData.color}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-[35%] h-full">
                <div className="space-y-4">
                  <div className="w-full bg-gray-800 p-4 rounded-xl space-y-5">
                    <h1 className="text-2xl font-bold">Upload Img</h1>
                    <div className="w-full h-75 rounded-2xl bg-gray-700 p-2">
                      <MdModeEdit className=" w-10 h-10 rounded-xl ml-80 bg-gray-500 p-2 hover:bg-gray-800" />
                      <div className="w-full flex justify-center items-center p-3 flex-col text-center gap-1">
                        <IoMdImages className="text-8xl" />
                        <input
                          type="file"
                          name="image"
                          className="text-xs text-center"
                          onChange={(e) => {
                            setProductData({
                              ...productData,
                              image: e.target.files[0],
                            });
                            console.log(e.target.files);
                          }}
                          // value={productData.image}
                        />
                        <p className="text-xs w-55">
                          Set the Brand thumbnail image. Only *.png, *.jpg and
                          *.jpeg image files are accepted.
                        </p>

                        <button
                          onClick={handleSubmit}
                          className="bg-gray-800 p-2 rounded-xl hover:bg-gray-600"
                        >
                          Upload
                        </button>
                      </div>
                    </div>
                    <div className="w-full h-18 flex justify-between">
                      <div className="w-15 h-15 rounded-xl bg-gray-700 p-2 hover:bg-gray-900 flex justify-center items-center">
                        <IoMdImages />
                      </div>
                      <div className="w-15 h-15 rounded-xl bg-gray-700 p-2 hover:bg-gray-900 flex justify-center items-center">
                        <IoMdImages />
                      </div>
                      <div className="w-15 h-15 rounded-xl bg-gray-700 p-2 hover:bg-gray-900 flex justify-center items-center">
                        <IoMdImages />
                      </div>
                      <div className="w-15 h-15 rounded-xl bg-gray-700 p-2 hover:bg-gray-900 flex justify-center items-center">
                        <IoMdImages />
                      </div>
                      <div className="w-15 h-15 rounded-xl bg-gray-700 p-2 hover:bg-gray-900 flex justify-center items-center text-2xl">
                        +
                      </div>
                    </div>
                  </div>

                  <div className="w-full space-y-2  bg-gray-800 rounded-2xl p-4">
                    <h1 className="text-2xl font-bold">Category</h1>
                    <div className="space-y-2">
                      <p className="text-xs font-semibold">Product Category</p>
                      <div className="flex justify-between p-2">
                        <input
                          type="text"
                          placeholder="jacket"
                          className="p-3 w-full border bg-gray-700 border-gray-400 rounded-xl"
                          name="category"
                          onChange={(e) => {
                            setProductData({
                              ...productData,
                              category: e.target.value,
                            });
                            console.log(e.target.value);
                          }}
                          value={productData.category}
                        />
                      </div>
                    </div>
                    <button className=" bg-gray-700 hover:bg-green-700 border-gray-400 rounded-xl p-2">
                      Add Category
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default UpdateProduct;
