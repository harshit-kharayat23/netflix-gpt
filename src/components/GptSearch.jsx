import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_URL } from "../utils/constants";
const GptSearch=()=>{
    return(
        <div> 
             <div className="fixed -z-[10]">
            <img className="h-screen object-cover md:h-max" src={BG_URL}/>
            </div>
            
            <GptSearchBar/>
            <GptMovieSuggestions/>
            
        </div>
    )
}
export default GptSearch;