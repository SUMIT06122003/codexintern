import React from "react";

function Hero() {
  return (
    <section style={{textAlign: "center", padding: "80px 20px", backgroundColor: "#f5f9ff"}}>
      <h1 style={{fontSize: "36px", marginBottom: "20px", color: "#222"}}>
        Welcome to <span style={{color: "#007bff"}}>CodexIntern</span>
      </h1>
      <p style={{fontSize: "18px", marginBottom: "30px", color: "#555"}}>
        Your gateway to internships, careers, and coding courses.
      </p>
      <button style={{backgroundColor: "#007bff", color: "white", padding: "12px 24px", fontSize: "16px", border: "none", borderRadius: "6px", cursor: "pointer"}}>
        Get Started
      </button>
    </section>
  );
}

export default Hero;
