// src/components/Signin.jsx
import React, { useState } from "react";
import { FaRegUser, FaUserCircle } from "react-icons/fa";
import { MdOutlinePassword } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

import sign from "../../assets/sign.jpg";

const Signin = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    uName: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://ecommerce-6-15vr.onrender.com/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json", // ✅ Correct header
          },
          body: JSON.stringify(login),
        }
      );

      const data = await response.json();

      if (response.ok) {
        // ✅ Token aur user data save
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("accessToken", data.accessToken);

        navigate("/"); // ✅ redirect after login
      } else {
        alert(data.message || "Invalid username or password");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="h-[90vh] flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 w-[70%] rounded-2xl shadow-lg overflow-hidden">
        {/* Left Side Image */}
        <div className="hidden md:block">
          <img src={sign} alt="login" className="object-cover h-full w-full" />
        </div>

        {/* Right Side Form */}
        <div className="bg-white text-black p-10 flex flex-col justify-center">
          <div className="flex flex-col gap-6">
            {/* Heading */}
            <div className="text-center flex gap-4 items-center justify-center">
              <FaUserCircle className="text-6xl text-gray-600" />
              <h2 className="text-4xl font-bold">Login</h2>
            </div>

            {/* Username Input */}
            <div className="flex items-center border-2 gap-2 rounded-2xl px-2">
              <FaRegUser className="text-2xl text-gray-500" />
              <input
                type="text"
                placeholder="Username"
                name="uName"
                className="w-full p-2 outline-none"
                value={login.uName}
                onChange={(e) => setLogin({ ...login, uName: e.target.value })}
              />
            </div>

            {/* Password Input */}
            <div className="flex items-center border-2 gap-2 rounded-2xl px-2">
              <MdOutlinePassword className="text-2xl text-gray-500" />
              <input
                type="password"
                placeholder="Password"
                name="password"
                className="w-full p-2 outline-none"
                value={login.password}
                onChange={(e) =>
                  setLogin({ ...login, password: e.target.value })
                }
              />
            </div>

            {/* Login Button */}
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md font-semibold transition"
              onClick={handleSubmit}
            >
              Login
            </button>

            {/* Footer Link */}
            <div className="text-center text-sm mt-2">
              <span>Don’t have an account? </span>
              <Link
                to="/create"
                className="underline hover:text-blue-500 font-bold"
              >
                Create one
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
