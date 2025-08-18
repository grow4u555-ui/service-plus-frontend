import React from "react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-blue-600 text-white py-8 text-center">
        <h1 className="text-4xl font-bold">About Us</h1>
      </header>
      <main className="flex-grow container mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Who We Are</h2>
        <p className="text-gray-700 mb-6">
          ServicePlus is a one-stop solution for all your service needs.
          From IT to home maintenance, we bring everything under one platform.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
        <p className="text-gray-700">
          Our mission is to provide reliable, affordable, and high-quality services
          to customers at their doorstep with ease and efficiency.
        </p>
      </main>
      <footer className="bg-gray-800 text-white text-center py-6 mt-6">
        <p>© {new Date().getFullYear()} ServicePlus. All rights reserved.</p>
      </footer>
    </div>
  );
}
