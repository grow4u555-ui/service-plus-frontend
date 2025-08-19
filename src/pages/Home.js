import React from "react";

function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-green-700 mb-4">Welcome to Service Plus</h1>
      <p className="text-lg">This is the Home page of your application.</p>
      <button className="mt-6 px-6 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700">
        Get Started
      </button>
    </div>
  );
}

export default Home;