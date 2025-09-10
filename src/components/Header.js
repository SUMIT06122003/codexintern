import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";  // ✅ logo file

function Header() {
  return (
    <header style={{
      display: "flex", 
      justifyContent: "space-between", 
      alignItems: "center", 
      padding: "15px 30px", 
      borderBottom: "1px solid #ddd"
    }}>
      {/* Logo + Brand */}
      <div style={{display: "flex", alignItems: "center", gap: "10px"}}>
        <img src={logo} alt="CodexIntern Logo" style={{height: "45px"}} />
        <span style={{fontSize: "22px", fontWeight: "bold", color: "#007bff"}}>
          CodexIntern
        </span>
      </div>

      {/* Navigation */}
      <nav style={{display: "flex", gap: "20px"}}>
        <Link to="/internships" style={{textDecoration: "none", color: "#333"}}>Get Internship</Link>
        <a href="#careers" style={{textDecoration: "none", color: "#333"}}>Careers</a>
        <a href="#courses" style={{textDecoration: "none", color: "#333"}}>Courses</a>
        <a 
          href="https://wa.me/919967021767" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{textDecoration: "none", color: "#333"}}
        >
          Contact
        </a>
      </nav>

      {/* Auth button */}
      <button style={{
        backgroundColor: "#007bff", 
        color: "white", 
        border: "none", 
        padding: "8px 16px", 
        borderRadius: "5px", 
        cursor: "pointer"
      }}>
        Login / Signup
      </button>
    </header>
  );
}

export default Header;
