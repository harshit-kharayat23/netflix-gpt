// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcoIIAX82-eRTj49KqzCEcJ9YrUNRqHOg",
  authDomain: "netflixgpt-c828a.firebaseapp.com",
  projectId: "netflixgpt-c828a",
  storageBucket: "netflixgpt-c828a.firebasestorage.app",
  messagingSenderId: "624225137147",
  appId: "1:624225137147:web:c71b6b970e1185bcd1db5e",
  measurementId: "G-71Q2TQ7PF4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();