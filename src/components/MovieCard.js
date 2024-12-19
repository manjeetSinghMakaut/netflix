import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const Moviecard = ({posterPath}) => {
  return (
    <div className="pr-4"> {/* Added margin for spacing between cards */}
      <img 
        alt="Movies card" 
        className="min-w-full max-w-[12rem] h-[12rem] object-cover rounded-lg " // Adjust size here
        src={IMG_CDN_URL + posterPath} 
      />
    </div>
  );
};

export default Moviecard;
