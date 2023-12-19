import React from "react";
import ShopName from "./ShopName";
const ShopLayer = () => {
  return (
    <>
      <div className="h-auto w-100 mt-8 mb-8 mx-36 flex flex-row justify-between items-center"> 
        <ShopName name="Rishi Retail Shop" img="public\img4.jpg" />
        <ShopName name="Sidharth Retail Shop " img="public\img2.jpg"  />
        <ShopName name="Akshita  Retail Shop" img="public\img3.jpg"/>
        <ShopName name="Mayank Retail Shop" img="public\img9.jpg" />
      </div>
    </>
  );
};

export default ShopLayer;
