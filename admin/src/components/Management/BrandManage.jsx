import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MdDeleteOutline, MdNotificationsNone } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BrandManage = () => {
  const [brands, setBrands] = useState("");
  const navigate = useNavigate();
  const getBrand = async () => {
    try {
      const response = await axios("http://localhost:5000/brands/");
      console.log(response.data);
      setBrands(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getBrand();
  }, []);

  const selectBrand = async (id) => {
    navigate(`/brandmanage/updatebrand/${id}`);
  };

  const DeleteData = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/brands/${id}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.log(error);
    }
  };

  if (brands)
    return (
      <div className="w-[80%] ml-[20%] bg-[#15171cfc] p-4 flex flex-col justify-center items-center">
        <div className="w-full text-white p-3 rounded-lg flex flex-col gap-2">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-2xl font-bold">Brand Management</h2>
            </div>
            <div className="p-2 flex gap-4">
              <Link
                to="/brandmanage/brandform"
                className="bg-blue-700 font-bold p-2 rounded-md text-center"
              >
                + New Brand
              </Link>
              <button className="bg-gray-800 hover:bg-gray-700 text-white px-3 py-3 rounded">
                <FaSearch />
              </button>
              <button className="bg-gray-800 hover:bg-gray-700 text-white px-3 py-3 rounded text-xl">
                <MdNotificationsNone />
              </button>
            </div>
          </div>
          <div className="flex bg-gray-800 rounded-2xl items-center px-6 p-5 gap-10 text-xl">
            <FaSearch />
            <input
              type="text"
              placeholder="Search"
              className="w-full text-white text-xl"
            />
          </div>

          <div className="">
            <table className="w-full text-sm">
              <thead className="text-gray-400 text-left border-b border-gray-700 ">
                <tr className=" text-md flex justify-between p-4 ">
                  {/* <th className="p-4 ">#</th> */}
                  <th>Brand</th>
                  <th>Brand Id</th>
                  <th>Description</th>
                  <th>Action</th>
                  {/* <th>Product Id</th> */}

                  {/* <th>Product ID</th> */}
                  {/* <th>Brand</th> */}
                  {/* <th>Date Added</th>
                <th>PRICE</th>
                <th>STATUS</th>
                <th>QTY</th> */}
                </tr>
              </thead>
              <tbody>
                {brands.map((brands, index) => (
                  <tr
                    // to="/brandmanage/update/:id"
                    key={index}
                    className="border-b border-gray-800 hover:bg-gray-800 flex justify-between items-center"
                    onClick={() => selectBrand(brands._id)}
                  >
                    <td className="p-7">{brands.title}</td>
                    <td className="text-blue-400">{brands._id}</td>
                    <td>{brands.desc}</td>
                    {/* <td className="text-blue-400">{Product._id}</td> */}
                    {/* <td>{brands.brand}</td> */}
                    {/* <td>{brands.date}</td> */}
                    {/* <td>${brands.price}</td> */}
                    {/* <td>
                    <span
                      className={`px-2 py-1 rounded-md text-xs font-medium ${
                        statusColor[brands.status]
                      }`}
                    >
                      {brands.status}
                    </span>
                  </td> */}
                    {/* <td>{brands.qty}</td> */}
                    <td
                      className="px-5 text-[25px] text-red-600 cursor-pointer"
                      onClick={() => DeleteData(brands._id)}
                    >
                      <MdDeleteOutline />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
};

export default BrandManage;
