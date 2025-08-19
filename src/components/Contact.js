import React from "react";

export default function Contact() {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <form className="max-w-lg mx-auto space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border p-3 rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border p-3 rounded"
        />
        <textarea
          placeholder="Your Message"
          className="w-full border p-3 rounded"
          rows="4"
        />
        <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
          Send Message
        </button>
      </form>
    </div>
  );
}
