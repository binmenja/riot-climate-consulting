import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Navbar from "./components/Navbar"; // Import Navbar component
import './App.css'; // Import App.css

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar /> {/* The Navbar now includes the logo */}
        <div className="content-container">
          <div className="container mx-auto p-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
