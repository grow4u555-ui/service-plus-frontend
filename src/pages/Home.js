import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-blue-100 via-white to-blue-50">
      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">ServicePlus</h1>
          <ul className="flex space-x-6 text-gray-700 font-medium">
            <li className="hover:text-blue-600 cursor-pointer">Home</li>
            <li className="hover:text-blue-600 cursor-pointer">Services</li>
            <li className="hover:text-blue-600 cursor-pointer">About</li>
            <li className="hover:text-blue-600 cursor-pointer">Contact</li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-16 flex-grow">
        <h1 className="text-5xl font-extrabold text-blue-600 drop-shadow-md">
          ServicePlus
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          One-stop solution for all your services ✨
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 transition">
          Get Started
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6 mt-6">
        <p>© {new Date().getFullYear()} ServicePlus. All rights reserved.</p>
      </footer>
    </div>
  );
}
