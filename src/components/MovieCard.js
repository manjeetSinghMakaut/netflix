import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const Moviecard = ({posterPath}) => {
if (!posterPath){
  return null;
}

  return (
    <div className="pr-4   transition-transform duration-300 ease-out hover:scale-105 hover:-translate-y-2" > 
      <img 
        alt="Movies card" 
        className="min-w-full max-w-[9rem] h-[9rem] object-cover rounded-lg md:max-w-[12rem] md:h-[12rem]" 
        src={IMG_CDN_URL + posterPath} 
      />
    </div>
  );
};

export default Moviecard;
