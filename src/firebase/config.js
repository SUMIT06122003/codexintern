// src/firebase/config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCRKOelygovX71j5EzlxkHyEwce771G_v0",
  authDomain: "codexintern-fca57.firebaseapp.com",
  projectId: "codexintern-fca57",
  storageBucket: "codexintern-fca57.firebasestorage.app",
  messagingSenderId: "413485199610",
  appId: "1:413485199610:web:5e889124d6e41c7deb5943",
  measurementId: "G-6E0TB33JF5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Enable Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
