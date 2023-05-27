import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="font-outfit flex items-center justify-center h-2/3 bg-purple-100">
      <div className="sm:block hidden w-1/2 bg-gradient-to-r from-blue-600 to-purple-800 h-screen"></div>
      <div className="sm:w-1/2 h-screen">
        <div className="grid items-center justify-center h-2/3">
          <form className="w-96 p-10 pb-8">
            <h1 className="text-5xl text-left font-bold">Chat Room</h1>
            <p className="text-lg text-left mb-9">Place where people meet</p>
            <div className="relative">
              <svg
                className="absolute w-6 h-6 top-3 left-3 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="bevel"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <input
                type="text"
                placeholder="Username"
                className="w-full pl-10 text-lg px-4 py-2 mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="relative">
              <svg
                className="absolute w-6 h-6 top-3 left-3 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="bevel"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full pl-10 text-lg px-4 py-2 mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="relative">
              <svg
                className="absolute w-6 h-6 top-3 left-3 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="bevel"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full pl-10 text-lg px-4 py-2 mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="relative">
              <svg
                className="absolute w-6 h-6 top-3 left-3 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="bevel"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              <input
                type="password"
                placeholder="Password"
                className="w-full pl-10 text-lg px-4 py-2 mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 mt-3 text-lg px-4 rounded-lg bg-purple-800 text-white hover:bg-purple-900"
            >
              Register
            </button>
            <div className="mt-7 mb-0 grid grid-cols-3 items-center text-gray-400">
              <hr className="border-gray-400" />
              <p className="text-center">or</p>
              <hr className="border-gray-400" />
            </div>
          </form>
          <div className="w-96 px-10 py-0">
            <Link to="/">
              <button
                type="button"
                className="w-full py-2 text-lg rounded-lg bg-slate-500 text-white hover:bg-slate-600"
              >
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
