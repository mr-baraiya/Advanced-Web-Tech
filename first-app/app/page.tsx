import React from "react";

function LandingPage() {
  return (
    <div className="h-screen bg-blue-500 text-white flex flex-col items-center justify-center px-6">

      {/* Hero Section */}
      <h1 className="text-4xl font-bold mb-4 text-center">
        Welcome to Our Platform
      </h1>

      <p className="text-lg text-center max-w-xl mb-8">
        A modern web application built to provide seamless experience.  
        Join us today and start exploring amazing features!
      </p>

      {/* Buttons */}
      <div className="flex gap-4">
        <a
          href="/login"
          className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition"
        >
          Login
        </a>

        <a
          href="/signup"
          className="bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-800 transition"
        >
          Sign Up
        </a>
      </div>

    </div>
  );
}

export default LandingPage;
