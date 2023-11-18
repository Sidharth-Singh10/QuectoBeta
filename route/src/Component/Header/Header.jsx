import React from "react";
import { Link
 } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className=" w-100 flex align-center justify-center z-20 bg-black text-white ">
        <div className="w-full h-full flex flex-row justify-between mx-4 xl:mx-36 my-12  ">
          <div className="w-1/2  flex flex-row justify-between items-center  text-xl font-medium no-underline">
            <Link to="/"
              className="text-4xl lg:text-4xl  font-extrabold "
              id="quecto"
              href=""
            >
              QUECTO
            </Link>
            <Link to="/about" class="link no-underline">About</Link>
            <Link to="/contact"  class="link no-underline">Contact</Link>
            <Link to="/*" class="link  no-underline">Explore</Link>
          </div>
          <div className="w-1/2 flex flex-row justify-end items-center gap-4 text-xl font-medium">
          
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

//<Link to="/contact">Contact</Link>
//            <Link to="/">Home</Link>