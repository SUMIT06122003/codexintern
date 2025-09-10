import React from "react";

function CourseCard({title, description}) {
  return (
    <div style={{border: "1px solid #ddd", borderRadius: "8px", padding: "20px", width: "250px", textAlign: "left", boxShadow: "0 4px 6px rgba(0,0,0,0.1)"}}>
      <h3 style={{fontSize: "20px", marginBottom: "10px", color: "#007bff"}}>{title}</h3>
      <p style={{fontSize: "14px", color: "#555", marginBottom: "15px"}}>{description}</p>
      <button style={{backgroundColor: "#007bff", color: "white", border: "none", padding: "8px 14px", borderRadius: "4px", cursor: "pointer"}}>
        Buy Now
      </button>
    </div>
  );
}

export default CourseCard;
