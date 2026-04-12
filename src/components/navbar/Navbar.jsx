import React from "react";
import dollerImg from "../../assets/dollar 1.png";
import logo from "../../assets/logo.png";

export const Navbar = ({coin}) => {


 
  return (
    <div className="navbar bg-base-100 shadow-sm container mx-auto">
      
      {/* Left - Logo */}
      <div className="flex-1">
        <img src={logo} alt="logo" />
      </div>

      {/* Middle */}
      <div className="hidden md:flex gap-6 font-medium">
        <a href="#">Home</a>
        <a href="#">Fixtures</a>
        <a href="#">Teams</a>
        <a href="#">Schedules</a>
      </div>

      
      <div className="flex-none">
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 font-bold text-xl bg-white hover:bg-gray-100 transition">
  {coin} coins
  <img src={dollerImg} alt="" className="w-5 h-5" />
</button>
      </div>

    </div>
  );
};