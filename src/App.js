import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar */}
        <nav className="bg-green-600 text-white p-4 shadow-md">
          <ul className="flex justify-center space-x-8">
            <li><Link className="hover:text-yellow-300 font-semibold" to="/">Home</Link></li>
            <li><Link className="hover:text-yellow-300 font-semibold" to="/about">About</Link></li>
            <li><Link className="hover:text-yellow-300 font-semibold" to="/contact">Contact</Link></li>
          </ul>
        </nav>

        {/* Pages */}
        <div className="flex-grow p-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-400 text-center p-4">
          © 2025 Service Plus. All Rights Reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;