import React from "react";
import styles from "./F1.css";

const Fmovies = () => {
    const openFmovies = () => {
        window.open("https://www.fmovies.ink/", "_blank");
    }
    const openAnymovies = () => {
        window.open("https://anymovie.cc/","_blank")
    }
  return (
    <>
      <div className="w-full text-white">
        <img
          className="w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/6c884f48-f7d8-4a59-9d25-b7c138813aee/ed2b002b-c6c5-459c-9c97-753f50e8286b/IN-en-20230807-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="/"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-full"></div>
        <div className="absolute top-[20%] p-4 md:p-20">
          <h1 className="text-3xl md:text-5xl font-semibold">Watch Movies  </h1>
          <div className="flex justify-center mt-8 space-x-6 pl-96 ">
            <button className="btn" onClick={openFmovies}>F Movies</button>
            <button className="btn" onClick={openAnymovies}>Any Movies</button>
        
          </div>
        </div>
      </div>
    </>
  );
};

export default Fmovies;
