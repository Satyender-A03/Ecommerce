import React, { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import profile from "../../assets/profile.jpg";
import axios from "axios";

const UserProfile = () => {
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
      const response = await axios("http://localhost:5000/auth/");
      console.log(response.data);
      setUsers(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="w-[80%] ml-[20%] bg-[#15171cfc] p-4">
      <div className="w-full text-white p-4 rounded-lg flex flex-col gap-10">
        <h1 className="text-5xl text-center font-bold">User Profile</h1>
        {users.map((users, index) => (
          <div key={index} className="w-full mt-10">
            <div className="w-full">
              <h2 className="text-3xl font-bold">{users.uName}</h2>
              <p className="text-xl mt-2">Fname Lname</p>
              <p className="text-xl mt-2">{users._id}</p>
            </div>
            <div className="w-full flex justify-between">
              <div className="flex gap-3 items-center text-xl">
                <FaLocationDot />
                <p>{users.address}</p>
              </div>

              <div className="flex gap-3 items-center text-xl">
                <MdMailOutline />
                <p>Email</p>
              </div>
              <div className="flex gap-3 items-center text-xl">
                <FiPhone />
                <p>Contact</p>
              </div>
            </div>
          </div>
        ))}

        <div className="w-full flex justify-between ">
          <div>
            <h1 className="text-3xl">About</h1>
          </div>
          <div className="rounded-4xl">
            <img src={profile} alt="" className="rounded-[50%] w-91 " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
