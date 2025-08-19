import React from "react";

export default function Hero() {
  return (
    <section className="bg-gray-100 text-center py-20">
      <h2 className="text-4xl font-bold mb-4">Welcome to Service Plus</h2>
      <p className="text-lg text-gray-600 mb-6">
        Your one-stop solution for services and support.
      </p>
      <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
        Get Started
      </button>
    </section>
  );
}
