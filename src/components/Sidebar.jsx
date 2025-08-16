import React from "react";

export default function Sidebar() {
  return (
    <div className="w-64 bg-blue-600 text-white flex flex-col p-4">
      <h2 className="text-xl font-bold mb-6">Menu</h2>
      <a href="#" className="mb-2 hover:bg-blue-700 p-2 rounded">Contact</a>
      <a href="#" className="mb-2 hover:bg-blue-700 p-2 rounded">Report</a>
    </div>
  );
}