import React from "react";
import shoplogo from "../assets/shoplogo.png";

const About = () => {
  return (
    <div className="w-full p-10 bg-gray-200 pt-24.5">
      <div className="w-full text-black  text-center">
        <h1 className="text-4xl font-bold ">WELCOME TO SHOPEASE</h1>
        <p className="font-semibold">
          your trusted partner in seamless shopping!
        </p>
      </div>

      <div className="w-full flex">
        <div className="w-[50%] p-10">
          <p className="text-black text-justify ">
            Founded with a vision to revolutionize the online retail experience,
            Shopease brings together a curated selection of top-quality
            products, unbeatable deals, and a user-friendly platform that puts
            customers first. Whether you're searching for the latest fashion
            trends, cutting-edge electronics, or everyday essentials, Shopease
            is your one-stop destination.
          </p>
          <div className="mt-10">
            <ul className="list-disc pl-5 space-y-2 text-gray-800">
              <li>
                <strong>Wide Selection:</strong> Thousands of products across
                categories like fashion, electronics, beauty, home, and more.
              </li>
              <li>
                <strong>Affordable Prices:</strong> We believe in giving you the
                best value for your money.
              </li>
              <li>
                <strong>Fast Delivery:</strong> Reliable shipping options with
                real-time tracking.
              </li>
              <li>
                <strong>Secure Payments:</strong> Multiple payment options with
                strong encryption for worry-free checkout.
              </li>
              <li>
                <strong>Excellent Support:</strong> A dedicated customer care
                team ready to assist you anytime.
              </li>
            </ul>
          </div>
        </div>

        <div className="w-[50%] p-10 flex justify-center">
          <img src={shoplogo} alt="logo" className="w-[75%] h-[60vh]" />
        </div>
      </div>
    </div>
  );
};

export default About;
