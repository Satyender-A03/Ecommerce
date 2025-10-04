import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_c7cvplw", "template_69hyiis", form.current, {
        publicKey: "kW5UznJjgEyBee5bQ",
      })
      .then(
        () => {
          console.log("EMAIL SENT!");
          alert("Sent!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed: " + error.text);
        }
      );
  };

  return (
    <>
      {" "}
      <div className="flex px-8 pb-12 ">
        <div className="flex justify-between items-center h-[30vh]  w-full bg-gray-200 rounded-2xl ">
          <div className="w-[35%] h-full text-black flex flex-col justify-between items-start  pl-8 py-8">
            <p className="text-5xl font-bold w-[80%]">
              See What We Found for You{" "}
            </p>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="w-[80%] rounded-full h-[5vh] bg-black flex p-[3px]"
            >
              <input
                type="email"
                name="user_email"
                id="brandTitle"
                className="w-full text-white border-0 text-sm rounded-full p-[15px]  "
                placeholder="Your Email"
                required
              />{" "}
              <button
                type="submit"
                className=" items-center w-auto h-auto text-sm text-nowrap font-bold text-center text-black px-[15px] bg-gray-200 rounded-full "
              >
                New Customer ?{" "}
              </button>{" "}
              {/* <textarea placeholder="Drop your Message" name="message" /> */}
            </form>
          </div>
          <div className="w-[35%] h-full text-black flex flex-col justify-end items-start gap-3 pr-8 pb-8">
            <p className="font-bold text-xl">
              We’d Love to Hear From You — Get in Touch
            </p>
            <p className="text-sm">
              Have questions, suggestions, or need support? We're always ready
              to assist you. Just fill out the form below, and our team will
              respond as quickly and efficiently as possible to help you out.
            </p>
          </div>
        </div>
      </div>
      <div className=" shadow-sm bg-gray-200 w-full pt-12">
        <div className="w-full  bg-gray-200 ">
          {/* <div className="p-8 flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img
                src="cart.png"
                className="h-[10vh] rounded-full bg-white p-1 w-[10vh] invert"
                alt="Flowbite Logo"
              />
              <span className="self-center text-5xl font-bold whitespace-nowrap text-white">
                DEAL POINT
              </span>
            </Link>
            <div className=" w-[35%] text-center">
              <ul className="flex flex-wrap items-center  text-sm font-medium text-white sm:mb-0 w-[100%] pb-5 justify-center">
                <li>
                  <Link to="/" className="hover:underline me-4 md:me-6">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:underline me-4 md:me-6">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:underline me-4 md:me-6">
                    Licensing
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div> */}
          <section className="animate-colorPulse">
            <div className="bg-gray-200">
              <div className="mx-auto w-full max-w-screen-xl lg:py-8 ">
                <div className="flex justify-between items-center ">
                  <div className="">
                    <Link
                      to="/"
                      className="flex items-center justify-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
                    >
                      <img
                        src="cart.png"
                        className="h-[10vh] rounded-full bg-black p-1 w-[10vh] "
                        alt="Flowbite Logo"
                      />
                      <span className="self-center text-5xl font-bold whitespace-nowrap text-black">
                        DEAL POINT
                      </span>
                    </Link>
                  </div>
                  <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    <div>
                      <h2 className="mb-6 text-sm font-semibold  uppercase text-black">
                        Contact Us
                      </h2>
                      <ul className="text-black  font-medium">
                        <li className="mb-4">
                          <Link to="/" className="hover:underline">
                            About Us
                          </Link>
                        </li>
                        <li>
                          <Link to="/" className="hover:underline">
                            Reviews
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h2 className="mb-6 text-sm font-semibold  uppercase text-black">
                        Follow us
                      </h2>
                      <ul className="text-black font-medium">
                        <li className="mb-4">
                          <Link to="/" className="hover:underline">
                            Github
                          </Link>
                        </li>
                        <li>
                          <Link to="/" className="hover:underline">
                            Discord
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h2 className="mb-6 text-sm font-semibold uppercase text-black">
                        Legal
                      </h2>
                      <ul className="text-black font-medium">
                        <li className="mb-4">
                          <Link to="/" className="hover:underline">
                            Privacy Policy
                          </Link>
                        </li>
                        <li>
                          <Link to="/" className="hover:underline">
                            Terms & Conditions
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <hr className="mb-6 sm:mx-auto border-gray-700 lg:mb-8" />
          <span className="block text-sm text-black sm:text-center pb-2">
            © 2023{" "}
            <Link to="/" className="hover:underline">
              DealPoint™ &nbsp;
            </Link>
            |&nbsp;All Rights Reserved.
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
