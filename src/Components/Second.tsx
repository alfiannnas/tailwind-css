import React, { useState } from "react";
import img from "../assets/test.png";

export default function Second(props) {
  const [getNameValue, SetNameValue] = useState("");

  const changeName = () => {
    SetNameValue("Nindy");
  };

  return (
    <>
      <div className="bg-hero bg-no-repeat bg-center h-screen bg-[length:1920px_1080px]">
        <div className="flex items-center justify-center h-screen">
          <div className="container max-w-6xl absolute top-24 flex flex-col items-center md:relative md:top-0 md:relative md:top-0 md:flex-row md:items-center">
            <img src={img} className="rounded-full w-52 md:w-80 sm:w-64 border-4 border-sky-950 mb-4 md:mb-0 mr-5" />
            <div>
              <p>{getNameValue}</p>
              <h1 className="text-xl font-poppins md:text-5xl sm:text-3xl m-4">{props.title}</h1>
              <p className="text-white text-md sm:text-xl md:text-xl m-4">{props.text}</p>
            </div>
          </div>
          <button className="bg-sky-800" onClick={() => changeName()}>
            ok
          </button>
        </div>
      </div>
    </>
  );
}
