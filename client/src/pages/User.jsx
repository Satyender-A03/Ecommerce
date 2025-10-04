import React, { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import profile from "../assets/profile.jpg";

const User = () => {
  const [users, setUsers] = useState(
    // null
    {
      _id: "",
      uName: "",
      fName: "",
      lName: "",
      email: "",
      phone: "",
      address: "",
    }
  );
  const getUser = async () => {
    try {
      const response = await fetch(
        `https://ecommerce-6-15vr.onrender.com/${JSON.parse(
          localStorage.getItem("accessToken")
        )}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("accessToken")
            )}`,
          },
        }
      );

      const data = await response.json();
      console.log(data);
      setUsers(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="w-full h-[100vh] bg-[#15171cfc] pt-20">
      <div className="w-full text-white p-4 rounded-lg flex flex-col gap-10">
        <h1 className="text-5xl text-center font-bold">User Profile</h1>
        <div className="w-full">
          <div className="w-full">
            <h2 className="text-3xl font-bold">{users.uName}</h2>
            <div className="flex">
              <h2 className="text-3xl font-bold">{users.fName}</h2>
              &nbsp;
              <span className="text-2xl mt-1 font-bold">{users.lName}</span>
            </div>
          </div>
          <div className="w-full flex justify-between">
            <div className="flex gap-3 items-center text-xl">
              <FaLocationDot />
              <p>{users.address}</p>
            </div>

            <div className="flex gap-3 items-center text-xl">
              <MdMailOutline />
              <p>{users.email}</p>
            </div>

            <div className="flex gap-3 items-center text-xl">
              <FiPhone />
              <p>{users.phone}</p>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-between ">
          <div>
            <h1 className="text-3xl">About</h1>
          </div>
          <div className="rounded-4xl">
            <img src={profile} alt="" className="rounded-[50%] w-80" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
