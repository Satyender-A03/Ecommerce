import React, { useEffect, useState } from "react";
import { FaRegCommentDots, FaSearch } from "react-icons/fa";
import { MdDeleteOutline, MdNotificationsNone } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const statusColor = {
  Pending: "bg-yellow-500 text-black",
  Confirmed: "bg-blue-600 text-white",
  Shipped: "bg-green-600 text-white",
  Rejected: "bg-red-600 text-white",
  Delivered: "bg-green-600 text-white",
  Shopping: "bg-red-700 text-white",
  InStock: "bg-blue-600 text-white",
  OutOfStock: "bg-red-700 text-white",
  LowStock: "bg-yellow-500 text-black",
};

const ProductManage = () => {
  const navigate = useNavigate();

  const [products, setProducts] = useState("");

  const getProduct = async () => {
    try {
      const response = await axios("http://localhost:5000/products/");
      console.log(response.data);
      // const data = await response.json();
      setProducts(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getProduct();
  }, []);

  const selectProduct = async (id) => {
    navigate(`/singleproduct/${id}`);
  };

  const DeleteData = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/products/${id}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.log(error);
    }
  };
  if (products)
    return (
      <div className="w-[80%] ml-[20%] bg-[#15171cfc] p-4 flex flex-col justify-center items-center">
        <div className="w-full text-white p-3 rounded-lg flex flex-col gap-2">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-2xl font-bold">Product Management</h2>
            </div>
            <div className="p-2 flex gap-4">
              <Link
                to="/productmanage/productform"
                className="bg-blue-700 font-bold p-2 rounded-md text-center"
              >
                + New Product
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
              <thead className="text-gray-400 text-left border-b border-gray-700">
                <tr className="text-md text-center">
                  {/* <th className="p-4 ">#</th> */}
                  <th>ITEM</th>
                  {/* <th>Product ID</th> */}
                  {/* <th>Date Added</th> */}
                  <th>BRAND</th>
                  <th>PRICE</th>
                  <th>Size</th>
                  {/* <th>STATUS</th> */}
                  <th>COLOR</th>
                  <th>CATEGORY</th>
                  <th>QTY</th>
                  <th>GENDER</th>
                  {/* <th>ACTION</th> */}
                </tr>
              </thead>
              <tbody>
                {products.map((products, index) => (
                  <tr
                    onClick={() => selectProduct(products._id)}
                    key={index}
                    className="border-b border-gray-800 hover:bg-gray-800 text-center "
                  >
                    {/* <td>{products.serial}</td> */}

                    <td className="p-7">{products.title}</td>

                    {/* <td>{products.item}</td> */}
                    {/* <td className="text-blue-400">{products._id}</td> */}
                    <td>{products.brand}</td>
                    {/* <td>{products.date}</td> */}
                    <td>${products.price}</td>
                    <td>{products.size}</td>
                    <td>{products.color}</td>
                    <td>{products.category}</td>

                    {/* <td>
                      <span
                        className={`px-2 py-1 rounded-md text-xs font-medium ${
                          statusColor[products.status]
                        }`}
                      >
                        {products.status}
                      </span>
                    </td> */}
                    <td>{products.qty}</td>
                    <td>{products.gender}</td>
                    {/* <td>{products.action}</td> */}
                    <td
                      className="px-5 text-[25px] text-red-600 cursor-pointer"
                      onClick={() => DeleteData(products._id)}
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

export default ProductManage;
