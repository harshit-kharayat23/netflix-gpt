import React, { useState ,useRef} from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { validate } from "../utils/formValdation";
const Login=()=>{
    const email=useRef(null);
    const password=useRef(null);
    const [isSignInForm,setSignInForm]=useState(true);
    const [errorMessage,setErrorMessage]=useState(null);
    const toggleSignUpform=()=>{
        setSignInForm(!isSignInForm);
    }
    const validateForm=()=>{
       
        const feedback=validate(email.current.value,password.current.value);
        setErrorMessage(feedback);
        
    }
    return(
        <div >
            <Header/>
            <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/f268d374-734d-474f-ad13-af5ba87ef9fc/web/IN-en-20250210-TRIFECTA-perspective_92338d5d-6ccd-4b1a-8536-eb2b0240a55e_large.jpg"/>
            </div>
            
            <form onSubmit={(e)=>{e.preventDefault()}} className="w-3/12 p-12 absolute  bg-black my-36 mx-auto right-0 left-0 text-white rounded-md opacity-80" >
                <h1 className="text-3xl p-2 font-bold">{isSignInForm ?"Sign In":"Sign Up"}</h1>
                { !isSignInForm && <input type="text" placeholder="full name" className="p-3 my-4 bg-gray-500 rounded-md w-full"/> }
                <input ref={email} type="text" placeholder="email" className="p-3 my-4 bg-gray-500 rounded-md w-full"/>
                <input ref={password} type="password" placeholder="Password" className="p-3 my-4 bg-gray-500 rounded-md w-full"/>
                <p className="text-red-700">{errorMessage}</p>
                <button className="p-2 my-4 w-full bg-red-500 rounded-md" onClick={validateForm}>{isSignInForm ?"Sign In":"Sign Up"}</button>
                <p className="cursor-pointer" onClick={toggleSignUpform}>{isSignInForm ?"New to Netflix? Sign up Now":"Already a member.Sign In now"} </p>
            </form>
        </div>
    )
}
export default Login;