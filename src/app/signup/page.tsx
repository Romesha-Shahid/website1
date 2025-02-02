
import React from "react";

const Signup = () => {
  return (
    <div className="bg-slate-200 min-h-screen flex items-center justify-center p-4">
      {/* Text Section */}
      <div className="text-2xl w-full sm:w-2/3 lg:w-1/2 text-center sm:text-left mb-8">
        <h1 className="underline font-extrabold text-3xl sm:text-4xl mb-4">SIGNUP</h1>
        <p className="text-sm sm:text-base">
          To sign up for Gmail, create a Google Account. You can use the username and password to sign up.
        </p>
      </div>

      {/* Signup Form Section */}
      <div className="bg-white flex flex-col p-6 sm:p-12 rounded-xl w-full sm:w-3/4 lg:w-1/3 shadow-lg">
        {/* Email Input */}
        <input
          className="my-3 border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="email"
          placeholder="Enter your email"
        />

        {/* Password Input */}
        <input
          className="my-3 border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="password"
          placeholder="Password"
        />

        {/* Sign Up Button */}
        <button className="bg-blue-700 my-3 py-3 text-lg font-bold text-white rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Sign Up
        </button>

        {/* Horizontal Divider */}
        <span className="my-3">
          <hr />
        </span>

        {/* Create New Account Button */}
        <button className="bg-green-500 my-3 py-3 text-lg font-bold text-white rounded-md hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 w-fit mx-auto">
          Create New Account
        </button>
      </div>
    </div>
  );
};

export default Signup;
