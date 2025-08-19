import React from "react";

function Contact() {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-4 text-green-700">Contact Us</h1>
      <p className="text-lg">You can reach us at: support@serviceplus.com</p>
      <form className="mt-6 space-y-4">
        <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border rounded-lg" />
        <input type="email" placeholder="Your Email" className="w-full px-4 py-2 border rounded-lg" />
        <textarea placeholder="Your Message" className="w-full px-4 py-2 border rounded-lg"></textarea>
        <button className="px-6 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;