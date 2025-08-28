import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-violet-950 text-gray-100 pt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-8">

          {/* Logo & About & Social Media */}
          <div className="mb-6 md:ms-5 md:mb-0 md:w-1/3">
            <h4 className="text-2xl font-bold mb-2">E-CART</h4>
            <p className="text-sm">
              Your one-stop online store for quality products and great deals. Enjoy fast delivery, secure payments, and a seamless shopping experience.
            </p>
            <ul className="flex space-x-4 my-4">
              <li>
                <a href="#" className="text-gray-100 hover:text-blue-500 text-xl">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-100 hover:text-blue-400 text-xl">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-100 hover:text-pink-500 text-xl">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-100 hover:text-blue-600 text-xl">
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="mb-6 md:mb-0 md:w-1/3 flex justify-start md:justify-center">
            <div>
              <h6 className="text-lg font-bold mb-3">Quick Links</h6>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => navigate("/")}
                    className="text-gray-100 hover:text-blue-400 transition-colors"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <a href="#aboutus" className="text-gray-100 hover:text-blue-400 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-100 hover:text-blue-400 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Subscription Form */}
          <div className="md:w-1/3 flex flex-col md:items-start">
            <h6 className="text-lg font-bold mb-3">Subscribe</h6>            
            <form className="flex w-full max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-l border text-black  px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                type="submit"
                className="rounded-r  px-4 py-2 font-semibold text-white bg-purple-800 hover:bg-purple-900 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 p-4">
          <p className="text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} E-Cart. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
