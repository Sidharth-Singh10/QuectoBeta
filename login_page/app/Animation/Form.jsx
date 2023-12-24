'use client'
import React, { useState } from 'react';
import BtnTry from './BtnTry';
import SignIn from '../Components/Signin/SignIn';
import CreateAcc from '../Components/CreateAcc/CreateAcc';



export default function Form() {
  const [overlayPosition, setOverlayPosition] = useState(50); // State to track the position of the overlay
  const [isHiddenLeft, setIsHiddenLeft] = useState(false); 
  const [isHiddenRight, setIsHiddenRight] = useState(true); 

  // Function to move the overlay div
  const moveDiv = () => {
    setOverlayPosition(prevPosition => prevPosition === 50 ? 0 : 50); // Toggle the position
    setIsHiddenLeft(hidden => !hidden); // Toggle the visibility of the left div!isHidden) // Toggle the visibility of the left div
    setIsHiddenRight(hidden =>!hidden); // Toggle the visibility of the right div!isHidden) // Toggle the visibility of the right div
};

  return (
    <div>
    
          <div id='overlay' className=' h-full flex flex-col  justify-center items-center overflow-hidden absolute z-40 w-1/2'
           style={{ left: `${overlayPosition}%`, transition: 'left 0.7s ease-in-out' }} >

            <div className='relative'>

            <div id="left" className='absolute z-10'  style={{ transform: `translateX(${isHiddenLeft ? '-100%' : '0%'})`, transition: 'transform 0.5s ease-in-out' }}>
            <SignIn/>
               
            </div>

            <div id="right" className='absoulute z-20'  style={{ transform: `translateX(${isHiddenRight ? '100%' : '0%'})`, transition: 'transform 0.5s ease-in-out' }}>
            
            <CreateAcc/>
            </div>

            </div>
            <BtnTry texts="Click me" handleclick={moveDiv} className="relative top-3/4"/>

          </div>
          
          
        </div>
     
  );
}
