import React from "react";

export default function Header() {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">SERVICE PLUS</h1>
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Sign In
      </button>
    </header>
  );
}