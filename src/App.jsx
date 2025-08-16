import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import LocationStatus from "./components/LocationStatus";

export default function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-6">
          <h1 className="text-2xl font-bold mb-4">Welcome to SERVICE PLUS</h1>
          <LocationStatus />
        </main>
      </div>
    </div>
  );
}