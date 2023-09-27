import React from "react";
import styles from "./F1.css";

const Fmovies = () => {
    const openEpic = () => {
        window.open("https://www.epicsports.me/", "_blank");
    }
    const openSports = () => {
        window.open("https://www.808scoretv1.com/","_blank")
    }
  return (
    <>
      <div className="w-full text-white">
        <img
          className="w-full h-full object-cover"
          src="https://img.freepik.com/free-vector/sport-equipment-concept_1284-13034.jpg?w=740&t=st=1695800480~exp=1695801080~hmac=d53f7728f58343b748e474e4f42447742b70ccf932027fb67ce45807cf7e0e71"
          alt="/"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-full"></div>
        <div className="absolute top-[20%] p-4 md:p-20">
          <h1 className="text-3xl md:text-5xl font-semibold">Sports  </h1>
          <div className="flex justify-center mt-8 space-x-6 pl-96 ">
            <button className="btn" onClick={openEpic}>Epic</button>
            <button className="btn" onClick={openSports}>Sport 888</button>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Fmovies;
