import React, { useState } from "react";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { CartContext } from "../../Context/Cart";
import { SearchContext } from "../../Context/Search";

const Navbar = () => {
  const cart = useContext(CartContext);
  const token = JSON.parse(localStorage.getItem("accessToken") || "null");
  console.log(token);

  const { search, setSearch } = useContext(SearchContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search.trim()) return;
    navigate("/searchproduct");
  };

  return (
    <nav className="w-full bg-gray-400/50 backdrop-blur-xs text-black fixed z-50 px-4">
      <div className="container flex justify-between items-center h-16">
        <div className="text-2xl font-bold ">ShopEase</div>

        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link to="/products" className=" hover:text-blue-600">
            Products
          </Link>
          <Link to="/about" className=" hover:text-blue-600">
            About
          </Link>
          <Link to="/contact" className=" hover:text-blue-600">
            Contact
          </Link>
        </div>

        <form
          className="flex justify-baseline items-center rounded-full border-2 border-gray-700 px-4 py-1"
          onSubmit={handleSubmit}
        >
          <input
            className="outline-none w-full pe-2"
            type="text"
            placeholder="Search Product"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <div className="flex gap-5 justify-center items-center">
            <button
              type="submit"
              className="active:text-blue-600 transition-colors duration-150"
            >
              <IoSearchSharp />
            </button>
          </div>
        </form>

        <div className="flex items-center gap-4">
          <Link to="/AddtoCart" className="hover:underline text-black flex">
            <FiShoppingCart className="text-2xl  cursor-pointer" />
            <div
              style={{
                position: "relative",
                top: "3px",
                left: "3px",
                color: "white",
              }}
            >
              {cart.length}
            </div>
          </Link>

          <Link to="/user/:id">
            <FiUser className="text-2xl cursor-pointer" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
