import React, { useEffect } from 'react'
import { auth } from '../utils/fireBase';
import { signOut,onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanuguage } from '../utils/configSlice';




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

const handleGptSearchClick=()=>{
    dispatch(toggleGptSearchView());
}
const handleChangeLanuguage=(e)=>{
    console.log(e.target.value);
    dispatch(changeLanuguage(e.target.value))

}
const showGptSearch=useSelector((store)=>store.gpt.toggle);
  
  return (
    <div className="absolute px-4 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between" >
      <img className="h-[78px]" src={LOGO} alt='logo'/>
     { user && (<div className='flex p-3'>
     { showGptSearch && (
        <select className='p-2 text-white bg-gray-800 rounded-lg' onChange={handleChangeLanuguage}>
          {SUPPORTED_LANGUAGES.map(lang=><option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
        </select>   
     )
     }
        <button className='py-2 px-4 mx-4 my-2 bg-purple-700 text-white rounded-lg'
        onClick={handleGptSearchClick} >{ showGptSearch?"Home":"GPT Search"}</button>
        <img className='w-12 h-12 ' src={user?.photoURL}/>
        <button onClick={handleSignOut} className='font-bold text-white'>Sign Out</button>
      </div>
     )}
    </div> 
    
  )
}

export default Header
