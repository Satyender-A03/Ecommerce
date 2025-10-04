import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="h-[100%] bg-gray-200 py-10 px-6 sm:px-12 lg:px-20 pt-30">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-green-600 mb-8">
          Contact Us
        </h1>

        <p className="text-center text-gray-600 mb-12">
          We'd love to hear from you! Reach out to Shopease for any queries,
          support, or feedback.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Column - Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-green-600 text-xl mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800">Our Office</h3>
                <p className="text-gray-600">
                  Shopease HQ, 456 Commerce Avenue, Mumbai, India
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-green-600 text-xl mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800">Call Us</h3>
                <p className="text-gray-600">+91 98765 43210</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaEnvelope className="text-green-600 text-xl mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800">Email</h3>
                <p className="text-gray-600">contact@shopease.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaClock className="text-green-600 text-xl mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800">Working Hours</h3>
                <p className="text-gray-600">Mon - Sat: 9:00 AM – 6:00 PM</p>
              </div>
            </div>
          </div>

          {/* Right Column - Map or Placeholder */}
          <div className="rounded-xl overflow-hidden shadow-lg h-64 sm:h-80 md:h-full">
            <iframe
              title="Shopease Location"
              className="w-full h-full"
              src="https://maps.google.com/maps?q=delhi%20india&t=&z=13&ie=UTF8&iwloc=&output=embed"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
