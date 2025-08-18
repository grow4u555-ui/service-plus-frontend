import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="bg-blue-600 text-white py-8 text-center">
        <h1 className="text-4xl font-bold">Contact Us</h1>
      </header>
      <main className="flex-grow container mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Get in Touch</h2>
        <form className="space-y-6 max-w-lg mx-auto bg-gray-50 p-8 rounded-lg shadow">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </main>
      <footer className="bg-gray-800 text-white text-center py-6 mt-6">
        <p>© {new Date().getFullYear()} ServicePlus. All rights reserved.</p>
      </footer>
    </div>
  );
}
