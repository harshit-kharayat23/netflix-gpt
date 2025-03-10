import React from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../utils/fireBase';
import { toast } from 'react-toastify';

function GoogleSignin() {
  async function googleLogin() {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);


      if (result.user) {
        toast.success("User logged in successfully", {
          position: "top-center",
        });
      }
    } catch (error) {
      console.error("Login failed:", error);
      toast.error("Google Sign-In failed. Please try again.", {
        position: "top-center",
      });
    }
  }

  return (
    <div>
      <p className="text-center p-4">--Or continue with--</p>
      <img
        className="my-[-35px] cursor-pointer"
        onClick={googleLogin}
        src="https://i.imgur.com/yczPzHD.png"
        alt="Google Sign-In"
      />
    </div>
  ); 
}

export default GoogleSignin;
