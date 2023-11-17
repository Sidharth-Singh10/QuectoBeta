import React from "react";
import "./Header.css";
import Button from "../Button/button";
const Header = () => {
  return (
    <>
      <div className=" w-100 flex align-center justify-center mb-24 border-2 = z-20 bg-white">
        <div className="w-full h-full flex flex-row justify-between mx-4 xl:mx-36 my-12  ">
          <div className="w-1/2  flex flex-row justify-between items-center  text-2xl font-medium no-underline">
            <a
              className="text-4xl lg:text-5xl  font-semibold "
              id="quecto"
              href=""
            >
              QUECTO
            </a>
            <a class="link no-underline">About</a>
            <a class="link no-underline">Contact</a>
            <a class="link no-underline">Explore</a>
          </div>
          <div className="w-1/2 flex flex-row justify-end items-center gap-4 text-xl font-medium">
            <button className="w-20 xl:w-36 h-8 xl:h-14 rounded-xl border-black border-2 text-lg xl:text-xl">
              Sign in
            </button>
            <Button />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
