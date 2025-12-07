import React from "react";

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center px-8">

      <h1 className="text-5xl font-bold text-blue-700 mb-6">
        Welcome to the Home Page
      </h1>

      <p className="text-lg text-gray-700 max-w-2xl mb-8">
        You are successfully logged in. Explore the dashboard, navigate through pages,
        and enjoy a smooth user experience with clean UI and fast performance.
      </p>

      <a
        href="/"
        className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition font-medium"
      >
        Go Back to Landing Page
      </a>

    </div>
  );
}

export default HomePage;
