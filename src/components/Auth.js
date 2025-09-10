import React, { useState } from "react";
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setIsSignup] = useState(true);

  const handleAuth = async () => {
    try {
      if (isSignup) {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Signup successful!");
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Login successful!");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div style={{textAlign: "center", padding: "30px"}}>
      <h2>{isSignup ? "Signup" : "Login"}</h2>
      <input 
        type="email" 
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{margin: "5px", padding: "8px"}}
      />
      <br />
      <input 
        type="password" 
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{margin: "5px", padding: "8px"}}
      />
      <br />
      <button onClick={handleAuth} style={{margin: "10px", padding: "8px 16px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "4px"}}>
        {isSignup ? "Signup" : "Login"}
      </button>
      <p>
        {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
        <span onClick={() => setIsSignup(!isSignup)} style={{color: "#007bff", cursor: "pointer"}}>
          {isSignup ? "Login here" : "Signup here"}
        </span>
      </p>
    </div>
  );
}

export default Auth;
