import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD1fcQ3JUwQ3OLWll0odFqAgCSxXCwyZNc",
  authDomain: "netflixgpt-f7bfd.firebaseapp.com",
  projectId: "netflixgpt-f7bfd",
  storageBucket: "netflixgpt-f7bfd.firebasestorage.app",
  messagingSenderId: "123362152060",
  appId: "1:123362152060:web:766ab3ee9c404d1cfec3f9",
  measurementId: "G-GZD0FNN4FW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();