import React from "react";

const Footer = () => {

    const listItems = [
        'Audio Description',
        'Help Centre',
        'Gift Cards',
        'Media Centre',
        'Investor Relations',
        'Jobs',
        'Terms of Use',
        'Privacy',
        'Legal Notices',
        'Cookie Preferences',
        'Corporate Information',
        'Contact Us',
        '',

      ];
  return (
    <footer className="bg-[#141414] border-t-none">
      <div className="flex items-center justify-start space-x-4 pl-12 pt-24"> {/* Added flexbox for alignment */}
        <a
          href="https://www.facebook.com/NetflixIN/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="h-8 w-8" src="https://img.icons8.com/material/24/facebook-new.png" alt="facebook-new"/>
        </a>
        <a
          href="https://www.instagram.com/Netflix_IN/"
          target="_blank"
          rel="noopener noreferrer"
        >
         <img className="h-8 w-8" src="https://img.icons8.com/material/24/instagram-new--v1.png" alt="instagram-new--v1"/>
        </a>
        <a
          href="https://x.com/netflixindia"
          target="_blank"
          rel="noopener noreferrer"
        >
         <img className="h-8 w-8" src="https://img.icons8.com/material/24/twitter--v2.png" alt="twitter--v2"/>
        </a>
        <a
          href="https://www.youtube.com/channel/UCZSNzBgFub_WWil6TOTYwAg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="h-8 w-8" src="https://img.icons8.com/material/24/youtube--v1.png" alt="youtube--v1"/>
        </a>
      </div>

      <div className="pt-6 pl-12">
  <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">  
    {listItems.map((item, index) => (
      <li key={index} className="mb-2 text-white opacity-50 hover:underline text-xs">
        {item}
      </li>
    ))}
  </ul>
</div>
<button className="p-1 m-1 border ml-12 border-white border-solid border-opacity-60 text-white opacity-50 rounded-sm font-extralight text-sm hover:opacity-95">
  service code
</button>   

 </footer>
  );
};

export default Footer;