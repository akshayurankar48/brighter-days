import React from "react";
import Logo from "../../assets/Logo.svg";

const Header = () => {
  return (
    <div className="w-full flex items-center justify-evenly h-28 bg-whitesmoke">
      {/* Header Left */}
      <div>
        <img src={Logo} alt="" />
      </div>
      {/* Header right */}
      <div className="flex text-md font-bold items-center">
        <a className="p-4" href="/">
          Home
        </a>
        <a className="p-4" href="/">
          About Us
        </a>
        <a className="p-4" href="/">
          Pages
        </a>
        <a className="p-4" href="/">
          Event
        </a>
        <a className="p-4" href="/">
          Contact
        </a>
      </div>
      <div className="">
        <button className="bg-[#FF6D6D] text-white text-lg rounded-full py-6 px-16">
          Donate
        </button>
      </div>
    </div>
  );
};

export default Header;
