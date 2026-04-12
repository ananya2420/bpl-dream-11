import React from "react";
import bannerMain from "/src/assets/banner-main.png";
import shadow from "../../../assets/bg-shadow.png";

export const Banner = () => {
  return (
    <section className="w-full bg-[#0b0f1a] py-16 px-6 relative overflow-hidden">
      
      {/* Background Shadow */}
      <img
        src={shadow}
        alt=""
        className="absolute top-0 left-0 w-full opacity-30"
      />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
        
        {/* Left Content */}
        <div className="text-white max-w-xl text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>

          <p className="text-gray-300 text-lg mb-6">
            Beyond Boundaries Beyond Limits
          </p>

          <button className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-300 transition">
            Claim Free Credit
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src={bannerMain}
            alt="banner"
            className="w-[280px] md:w-[400px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};