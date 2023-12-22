"use client";
import React, { useState } from "react";
import Image from "next/image";
// Common styling values
const containerPadding = "px-4";
const largeScreenPadding = "lg:px-32";
const mediumScreenPadding = "md:px-28";

// Button styling
const buttonBase =
  "text-xs px-2 py-1 rounded-md md:text-md md:font-bold border border-black";
const signInButton = `${buttonBase} md:px-5 md:py-2 md:w-24 md:rounded-lg`;
const searchButton = `${buttonBase} md:px-8 md:py-2 md:w-36 md:rounded-lg  md:text-lg md:font-light`;

export function Top() {
  return (
    <div
      className={`w-full flex flex-col ${containerPadding} ${mediumScreenPadding} ${largeScreenPadding} overflow-hidden`}
    >
      <div className="w-full flex flex-row justify-between py-8">
        <div className="text-4xl md:text-4xl font-bold md:tracking-wide">
          QUECTO
        </div>
        <div className="flex flex-row gap-2 lg:gap-5">
          <button className={signInButton}>Sign in</button>
          <button className={signInButton}>Sign up</button>
        </div>
      </div>
    </div>
  );
}

export function Top2() {
  return (
    <div className="py-48 w-full h-auto md:px-32 flex flex-col justify-between items-center md:py-28 md:pb-32 ">
      <div className="w-full flex flex-col justify-between items-center">
        <h1 className="text-4xl md:text-5xl font-bold lg:text-7xl md:w-4/5 text-center md:font-semibold">
          Discover the best <br />
          local stores{" "}
        </h1>
        <div className="w-5/6 h-auto flex justify-center gap-4 mt-12 md:mt-16">
          <input
            type="search"
            placeholder="Enter your location"
            className="py-1 px-2 text-sm w-5/6 md:w-3/6 md:h-12 border border-black"
          />
          <button className={searchButton}>Search</button>
        </div>
      </div>
    </div>
  );
}

export function DownloadApp() {
  return (
    <>
      <div
        className={` ${containerPadding} ${mediumScreenPadding} ${largeScreenPadding}`}
      >
        <div className="w-full flex flex-row  h-auto py-2 md:py-0 ">
          <div className=" w-4/6 gap-3 pt-4 md:w-1/2 flex flex-col md:gap-8 jutify-center md:py-16">
            <h2 className=" text-sm md:text-3xl font-bold">Shop with ease</h2>
            <p className=" text-xxs md:text-xl">
              Discover and order the best products <br></br> from local stores
              with Quecto. <br></br>Our platform offers variety of items{" "}
              <br></br> available in your local neighbour
            </p>
            <button className=" w-2/6 text-xxs md:text-sm md:w-2/6 border border-black md:py-2 md::mt-2 md:px-4 md:rounded-lg">
              Download
            </button>
          </div>
          <div className=" w-2/6 md:w-1/2 object-cover flex justify-center ">
            <img src="/img6.png" className=""></img>
          </div>
        </div>
      </div>
    </>
  );
}
export function Dropdown(props) {
  const [isDropdownOpen, setDropdownOpen] = useState(true);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  return (
    <>
      <div
        className={`w-full  ${containerPadding} ${mediumScreenPadding} ${largeScreenPadding}`}
      >
        <div className="flex flex-row justify-between border-b border-t border-opacity-30 border-black">
          <h2 className=" text-lg md:text-2xl py-8 font-medium ">
            {props.name}
          </h2>
          <button onClick={toggleDropdown}>*</button>
        </div>
      </div>
      <div className={`transition-max-height ease-in-out duration-500 overflow-hidden ${isDropdownOpen ? 'max-h-96' : 'max-h-0'}`}>
        {props.comp}
      </div>
    </>
  );
}

const Landing = () => (
  <>
    <Top />
    <Top2 />
    <Dropdown name="How it works" comp={<Top />} />
    <Dropdown name="Become a quecto user" comp={<Top2 />} />
    <Dropdown name="Download our app" comp={<DownloadApp />} />
  </>
);

export default Landing;
