import React from "react";

function Login() {
  return (
    <div className="font-outfit flex items-center justify-center h-2/3 bg-purple-100">
      <div className="sm:block hidden w-1/2 bg-gradient-to-r from-orange-700 to-red-800 h-screen"></div>
      <div className="sm:w-1/2 h-screen">
        <div className="flex items-center justify-center h-2/3">
          <form className="w-96 p-10 pt-52">
            <h1 className="text-5xl text-left font-bold ">Chat Room</h1>
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
              className="w-full py-2 mt-3 text-lg px-4 rounded-lg bg-red-800 text-white hover:bg-red-900"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
