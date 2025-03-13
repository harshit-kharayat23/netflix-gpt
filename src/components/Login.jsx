import React, { useState ,useRef} from "react";
import Header from "./Header";
import { validate } from "../utils/formValdation";
import {createUserWithEmailAndPassword ,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from "../utils/fireBase";
import { BG_URL } from '../utils/constants';
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { PHOTOURL } from "../utils/constants";
const Login=()=>{
    const dispatch=useDispatch();

    const name=useRef(null);
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
        if(feedback)return ;

    
        if(!isSignInForm){
            //signUp
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                const user = userCredential.user;

                updateProfile(user, {
                    displayName: name.current.value,
                    photoURL: PHOTOURL 
                }).then(async () => {
                    await user.reload(); 
                    const updatedUser = auth.currentUser;
                    dispatch(addUser({
                        uid: updatedUser.uid,
                        email: updatedUser.email,
                        displayName: updatedUser.displayName,
                        photoURL: updatedUser.photoURL
                    }));
                })
                
                  
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+'-'+errorMessage);
        });
    }
        else{
            //sign In
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                const user = userCredential.user;

                const {uid,email,displayName,photoURL} = auth.currentUser;
                dispatch(addUser(uid,email,displayName,photoURL))

            
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+'-'+errorMessage)
            });
        }
        
    }
    return(
        <div >
            <Header/>
            <div className="absolute ">
                <img className="h-screen md:w-screen object-cover" src={BG_URL}/>
            </div>
            
            <form onSubmit={(e)=>{e.preventDefault()}} className="w-full my-[50%] md:w-3/12 p-12 absolute  bg-black md:my-36 mx-auto right-0 left-0 text-white rounded-md opacity-80" >
                <h1 className="text-3xl p-2 font-bold">{isSignInForm ?"Sign In":"Sign Up"}</h1>
                { !isSignInForm && <input ref={name} type="text" placeholder="full name" className="p-3 my-4 bg-gray-500 rounded-md w-full"/> }
                <input ref={email} type="text" placeholder="email" className="p-3 my-4 bg-gray-500 rounded-md w-full"/>
                <input ref={password} type="password" placeholder="Password" className="p-3 my-4 bg-gray-500 rounded-md w-full"/>
                <p className="text-red-700">{errorMessage}</p>
                <button className="p-2 my-4 w-full bg-red-500 rounded-md" onClick={validateForm}>{isSignInForm ?"Sign In":"Sign Up"}</button>
                <p className="cursor-pointer " onClick={toggleSignUpform}>{isSignInForm ?"New to Netflix? Sign up Now":"Already a member.Sign In now"} </p>
            </form>
        </div>
    )
}
export default Login;