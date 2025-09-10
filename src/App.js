import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";               // ✅ correct path
import InternshipPage from "./pages/InternshipPage"; // ✅ correct path

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/internships" element={<InternshipPage />} />
      </Routes>
    </Router>
  );
}

export default App;
