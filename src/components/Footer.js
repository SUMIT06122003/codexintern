import React from "react";

function Footer() {
  return (
    <footer style={{backgroundColor: "#f1f1f1", padding: "20px", textAlign: "center", marginTop: "40px"}}>
      <p style={{margin: 0}}>© {new Date().getFullYear()} CodexIntern. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
