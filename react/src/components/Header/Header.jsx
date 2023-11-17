import React from "react";
import "./Header.css";
import Button from "../Button/button";
import SignBut from "../Button/singin";
const Header = () => {
  return (
    <>
      <div className=" w-100 flex align-center justify-center mb-24 border-2  z-20 bg-none">
        <div className="w-full h-full flex flex-row justify-between mx-4 xl:mx-36 my-12  ">
          <div className="w-1/2  flex flex-row justify-between items-center  text-xl font-medium no-underline">
            <a
              className="text-4xl lg:text-4xl  font-extrabold "
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
            <SignBut />
            <Button />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
