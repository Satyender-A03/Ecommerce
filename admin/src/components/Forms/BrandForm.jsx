import React, { useEffect, useState } from "react";
import { FaCheck, FaSearch } from "react-icons/fa";
import { IoIosArrowDropdownCircle, IoMdImages } from "react-icons/io";
import { MdDelete, MdModeEdit } from "react-icons/md";

const BrandForm = () => {
  const [brand, setBrand] = useState({
    image: null,
    title: "",
    desc: "",
    // product: "",
  });
  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("image", brand.image);
      formData.append("title", brand.title);
      formData.append("desc", brand.desc);
      // formData.append("product", brand.product);
      console.log(brand);
      const response = await fetch("http://localhost:5000/brands/upload", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-[80%] ml-[20%] bg-[#15171cfc] p-2 flex flex-col justify-center items-center">
      <div className="w-full text-white p-3 rounded-lg flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">Add New Brand</h2>
          </div>
          <div className="p-2 flex gap-4">
            <button
              className="bg-gray-700 hover:bg-red-700 font-bold p-3 rounded-md text-center flex gap-3 items-center"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              <MdDelete />
              Delete
            </button>
            <button
              onClick={handleSubmit}
              className="hover:bg-blue-600 bg-gray-700 font-bold p-3 rounded-md text-center flex gap-3 items-center"
            >
              <FaCheck /> Add Brand
            </button>
          </div>
        </div>

        <div className="w-full flex justify-center mt-9 mb-32">
          <div className="w-[65%] bg-gray-800 p-7 rounded-xl space-y-5">
            <h1 className="text-2xl font-bold text-center">
              General Information
            </h1>
            <div className="w-full flex flex-col gap-2">
              <p className="text-xl">Brand Name</p>
              <input
                type="text"
                placeholder="Title"
                name="title"
                className="p-3 w-full border bg-gray-700 border-gray-400 rounded-xl"
                onChange={(e) => {
                  setBrand({ ...brand, title: e.target.value });
                  console.log(e.target.value);
                }}
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <p className="text-xl"> Brand Discription </p>
              <input
                type="text"
                placeholder="Discription"
                name="desc"
                className="w-full h-29 text-sm border bg-gray-700 border-gray-400 rounded-xl p-3"
                onChange={(e) => {
                  setBrand({ ...brand, desc: e.target.value });
                  console.log(e.target.value);
                }}
              />
            </div>
            {/* <div className="w-full flex flex-col gap-2">
              <p className="text-xl">Product ID</p>
              <input
                type="text"
                placeholder="45249524888544"
                name="title"
                className="p-3 w-full border bg-gray-700 border-gray-400 rounded-xl"
                onChange={(e) => {
                  setBrand({ ...brand, product: e.target.value });
                  console.log(e.target.value);
                }}
              />
            </div> */}
            <div className="w-full flex flex-col gap-2">
              <p className="text-xl">Brand Image</p>
              <input
                type="file"
                name="image"
                className="text-xs text-center bg-gray-700 rounded-xl p-3"
                onChange={(e) => {
                  setBrand({
                    ...brand,
                    image: e.target.files[0],
                  });
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandForm;
