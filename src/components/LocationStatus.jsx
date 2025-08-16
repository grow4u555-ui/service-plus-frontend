import React, { useEffect, useState } from "react";

export default function LocationStatus() {
  const [city, setCity] = useState(import.meta.env.VITE_APP_CITY || "Unknown");
  const [available, setAvailable] = useState(false);

  useEffect(() => {
    if (city === "Durgapur") {
      setAvailable(true);
    }
  }, [city]);

  return (
    <div className="p-4 border rounded bg-white shadow">
      <p className="mb-2">Your city: <b>{city}</b></p>
      <p className="mb-4">
        Service Status:{" "}
        <span className={available ? "text-green-600" : "text-red-600"}>
          {available ? "Available ✅" : "Not Available ❌"}
        </span>
      </p>
      <button
        className={`px-4 py-2 rounded ${
          available
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "bg-gray-300 text-gray-600 cursor-not-allowed"
        }`}
        disabled={!available}
      >
        Book Now
      </button>
    </div>
  );
}