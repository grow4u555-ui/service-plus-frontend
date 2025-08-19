import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";

function App() {
  return (
    <Router>
      <div>
        {/* Navbar */}
        <nav style={{ padding: "10px", background: "#4CAF50" }}>
          <Link to="/" style={{ margin: "10px", color: "white" }}>Home</Link>
          <Link to="/about" style={{ margin: "10px", color: "white" }}>About</Link>
          <Link to="/contact" style={{ margin: "10px", color: "white" }}>Contact</Link>
        </nav>

        {/* Pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Footer */}
        <footer style={{ textAlign: "center", marginTop: "50px", padding: "20px", background: "#f1f1f1" }}>
          <p>© 2025 Service Plus. All Rights Reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
