import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function InternshipPage() {
  const internships = [
    { id: "internship01", title: "Frontend Developer Intern", desc: "Work with React.js, HTML, CSS, and build UI features." },
    { id: "internship02", title: "Backend Developer Intern", desc: "Work with Node.js, Firebase, APIs, and database management." },
    { id: "internship03", title: "Data Analyst Intern", desc: "Analyze datasets, create dashboards, and support decision-making." },
  ];

  return (
    <div>
      <Header />
      <main style={{padding: "50px 20px"}}>
        <h2 style={{fontSize: "28px", textAlign: "center", marginBottom: "40px"}}>
          Available Internships
        </h2>
        <div style={{display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap"}}>
          {internships.map((intern) => (
            <div key={intern.id} style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "20px",
              width: "300px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
            }}>
              <h3 style={{color: "#007bff"}}>{intern.title}</h3>
              <p style={{color: "#555"}}>{intern.desc}</p>
              <button style={{
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                padding: "8px 16px",
                borderRadius: "5px",
                cursor: "pointer",
                marginTop: "10px"
              }}>
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default InternshipPage;
