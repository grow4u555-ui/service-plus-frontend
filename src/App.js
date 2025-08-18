import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      {/* Navbar */}
      <nav style={{
        backgroundColor: "#1e40af",
        padding: "15px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white"
      }}>
        <h2 style={{ margin: 0 }}>Service Plus</h2>
        <div>
          <Link to="/" style={{ color: "white", margin: "0 10px", textDecoration: "none" }}>Home</Link>
          <Link to="/about" style={{ color: "white", margin: "0 10px", textDecoration: "none" }}>About</Link>
          <Link to="/contact" style={{ color: "white", margin: "0 10px", textDecoration: "none" }}>Contact</Link>
        </div>
      </nav>

      {/* Page Routes */}
      <div style={{ padding: "30px", minHeight: "70vh", textAlign: "center" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      {/* Footer */}
      <footer style={{
        backgroundColor: "#1e3a8a",
        color: "white",
        padding: "20px",
        textAlign: "center"
      }}>
        <p>© 2025 Service Plus. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
