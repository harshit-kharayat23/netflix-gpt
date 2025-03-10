import React, { useEffect } from 'react'
import { auth } from '../utils/fireBase';
import { signOut,onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { LOGO } from '../utils/constants';


function Header() {
  const user=useSelector(store=>store.user)
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const handleSignOut=()=>{
    signOut(auth).then(() => {
        dispatch(removeUser());

    }).catch((error) => {
      
    });
    
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            const { uid, email, displayName, photoURL } = user;
            dispatch(addUser({ uid, email, displayName, photoURL }));
            navigate('/browse');
        } else {
            dispatch(removeUser());
            navigate('/');
        }
    });

    return ()=> unsubscribe(); 
}, []);


  return (
    <div className="absolute px-4 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between" >
      <img className="h-[78px]" src={LOGO} alt='logo'/>
     { user && (<div className='flex p-3'>
        <img className='w-12 h-12 ' src={user?.photoURL}/>
        <button onClick={handleSignOut} className='font-bold text-white'>Sign Out</button>
      </div>
     )}
    </div>
    
  )
}

export default Header
