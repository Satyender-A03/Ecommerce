// src/components/GlassLogin.jsx
import React, { useState } from "react";
import { FaAddressCard, FaRegUser, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  MdDriveFileRenameOutline,
  MdOutlineEmail,
  MdOutlinePassword,
  MdOutlinePhone,
} from "react-icons/md";
import sign from "../../assets/sign.jpg";

const CreateSignin = () => {
  const [signin, setSignin] = useState({
    uName: "",
    fName: "",
    lName: "",
    email: "",
    password: "",
    address: "",
    phone: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://ecommerce-6-15vr.onrender.com/auth",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(signin),
        }
      );

      const data = await response.json();
      console.log("Server Response:", data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className="pt-20 min-h-screen flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] rounded-2xl shadow-lg overflow-hidden">
        {/* Left Side Image */}
        <div>
          <img src={sign} alt="signup" className="object-cover h-full w-full" />
        </div>

        {/* Right Side Form */}
        <div className="w-full text-black bg-white">
          <div className="flex flex-col gap-6 p-6">
            <div className="text-center flex gap-4 items-center justify-center">
              <FaUserCircle className="size-15 text-gray-700" />
              <h2 className="text-4xl font-bold">Create Account</h2>
            </div>

            <form
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              onSubmit={handleSubmit}
            >
              {/* First Name */}
              <div className="flex items-center border-2 rounded-2xl overflow-hidden">
                <MdDriveFileRenameOutline className="text-4xl bg-gray-300 w-12 p-2" />
                <input
                  type="text"
                  placeholder="First Name"
                  value={signin.fName}
                  onChange={(e) =>
                    setSignin({ ...signin, fName: e.target.value })
                  }
                  name="fName"
                  className="p-1 w-full outline-none"
                  required
                />
              </div>

              {/* Last Name */}
              <div className="flex items-center border-2 rounded-2xl overflow-hidden">
                <MdDriveFileRenameOutline className="text-4xl bg-gray-300 w-12 p-2" />
                <input
                  type="text"
                  placeholder="Last Name"
                  name="lName"
                  className="w-full p-1 outline-none"
                  value={signin.lName}
                  onChange={(e) =>
                    setSignin({ ...signin, lName: e.target.value })
                  }
                  required
                />
              </div>

              {/* Username */}
              <div className="flex items-center border-2 rounded-2xl overflow-hidden">
                <FaRegUser className="text-4xl bg-gray-300 w-12 p-2" />
                <input
                  type="text"
                  placeholder="Username"
                  name="uName"
                  className="w-full p-1 outline-none"
                  value={signin.uName}
                  onChange={(e) =>
                    setSignin({ ...signin, uName: e.target.value })
                  }
                  required
                />
              </div>

              {/* Email */}
              <div className="flex items-center border-2 rounded-2xl overflow-hidden">
                <MdOutlineEmail className="text-4xl bg-gray-300 w-12 p-2" />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="w-full p-1 outline-none"
                  value={signin.email}
                  onChange={(e) =>
                    setSignin({ ...signin, email: e.target.value })
                  }
                  required
                />
              </div>

              {/* Password */}
              <div className="flex items-center border-2 rounded-2xl overflow-hidden">
                <MdOutlinePassword className="text-4xl bg-gray-300 w-12 p-2" />
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="w-full p-1 outline-none"
                  value={signin.password}
                  onChange={(e) =>
                    setSignin({ ...signin, password: e.target.value })
                  }
                  required
                />
              </div>

              {/* Phone */}
              <div className="flex items-center border-2 rounded-2xl overflow-hidden">
                <MdOutlinePhone className="text-4xl bg-gray-300 w-12 p-2" />
                <input
                  type="text"
                  placeholder="Phone"
                  name="phone"
                  className="w-full p-1 outline-none"
                  value={signin.phone}
                  onChange={(e) =>
                    setSignin({ ...signin, phone: e.target.value })
                  }
                  required
                />
              </div>

              {/* Address */}
              <div className="flex items-center border-2 rounded-2xl overflow-hidden col-span-2">
                <FaAddressCard className="text-4xl bg-gray-300 w-12 p-2" />
                <input
                  type="text"
                  placeholder="Address"
                  name="address"
                  className="w-full p-1 outline-none"
                  value={signin.address}
                  onChange={(e) =>
                    setSignin({ ...signin, address: e.target.value })
                  }
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="col-span-2">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md font-semibold cursor-pointer w-full"
                >
                  Create Account
                </button>
              </div>
            </form>

            <div className="text-center text-sm mt-2">
              <span>Already have an account? </span>
              <Link
                to="/signin"
                className="underline hover:text-blue-500 font-bold"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateSignin;
