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
    <footer className="bg-[#141414]">
      <div className="flex items-center justify-start space-x-4 pl-12 pt-24"> {/* Added flexbox for alignment */}
        <a
          href="https://www.facebook.com/NetflixIN/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="w-8 h-8 object-cover rounded-full bg-black"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgdNC-Fi-uOyIDPx-Q93vYWSIVUWbQYQvjnci-Cbh21Ydn-pORACA7GC-kqagNPnHtnGk&usqp=CAU"
            alt="Facebook Logo"
          />
        </a>
        <a
          href="https://www.instagram.com/Netflix_IN/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="w-8 h-8 object-cover rounded-full bg-black"
            src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/instagram-white-icon.png"
            alt="Instagram Logo"
          />
        </a>
        <a
          href="https://x.com/netflixindia"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="w-8 h-8 object-cover rounded-full bg-black"
            src="https://img.freepik.com/premium-vector/twitter-vector-logo-logotype-vector-social-media-black-white_901408-397.jpg"
            alt="Twitter Logo"
          />
        </a>
        <a
          href="https://www.youtube.com/channel/UCZSNzBgFub_WWil6TOTYwAg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="w-8 h-8 object-cover rounded-full bg-black"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqXVO2YP4WfTb2q-YurDWxA9XwoHvYee3UCA&s"
            alt="YouTube Logo"
          />
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