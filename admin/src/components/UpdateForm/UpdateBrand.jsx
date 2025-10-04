import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateBrand = () => {
  const [brand, setBrand] = useState("");
  const { id } = useParams();
  const updateBrand = async () => {
    try {
      const response = await fetch(`http://localhost:5000/brands/${id}`);
      const data = await response.json();
      console.log(data);
      setBrand(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    updateBrand();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("image", brand.image);
      formData.append("title", brand.title);
      formData.append("desc", brand.desc);
      console.log(brand);

      const response = await fetch(
        `http://localhost:5000/brands/${brand._id}`,
        {
          method: "PATCH",
          body: formData,
        }
      );
      const data = await response.json();
      console.log(data);

      setBrand({
        title: "",
        desc: "",
        image: null,
      });
    } catch (error) {
      console.log(error);
    }
  };
  if (brand)
    return (
      <div className="w-[80%] ml-[20%] bg-[#15171cfc] p-2 flex flex-col justify-center items-center">
        <div className="w-full text-white p-3 rounded-lg flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold">Update Brand</h2>
            </div>
            <div className="p-2 flex gap-4">
              <button className="bg-gray-700 hover:bg-red-700 font-bold p-3 rounded-md text-center flex gap-3 items-center">
                <MdDelete />
                Delete
              </button>
              <button
                onClick={handleSubmit}
                className="hover:bg-blue-600 bg-gray-700 font-bold p-3 rounded-md text-center flex gap-3 items-center"
              >
                <FaCheck /> Update Brand
              </button>
            </div>
          </div>

          <div className="w-full flex justify-center mt-9 mb-5">
            <div className="w-[65%] bg-gray-800 p-7 rounded-xl space-y-5">
              <h1 className="text-2xl font-bold text-center">
                General Information
              </h1>

              <div className="w-full flex flex-col gap-2">
                <p className="text-xl">Brand Name</p>
                <input
                  type="text"
                  placeholder="title"
                  value={brand.title}
                  onChange={(e) =>
                    setBrand({ ...brand, title: e.target.value })
                  }
                  className="p-3 w-full border bg-gray-700 border-gray-400 rounded-xl"
                />
              </div>

              <div className="w-full flex flex-col gap-2">
                <p className="text-xl">Brand Description</p>
                <input
                  type="text"
                  placeholder="Description"
                  value={brand.desc}
                  onChange={(e) => setBrand({ ...brand, desc: e.target.value })}
                  className="w-full h-29 text-sm border bg-gray-700 border-gray-400 rounded-xl p-3"
                />
              </div>

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

export default UpdateBrand;
