'use client'
import React, { useState } from 'react';
import BtnTry from './BtnTry';
import TestLeft from './TestLeft';
import TestRight from './TestRight';
import CreateAcc from '../Components/CreateAcc/CreateAcc';
import SignIn from '../Components/Signin/SignIn';

export default function Overlay(props) {
  const [overlayPosition, setOverlayPosition] = useState(0); // State to track the position of the overlay
  const [isHiddenLeft, setIsHiddenLeft] = useState(false); 
  const [isHiddenRight, setIsHiddenRight] = useState(true); 
  const [overlayPositionF, setOverlayPositionF] = useState(50); // State to track the position of the overlay
  const [isHiddenLeftF, setIsHiddenLeftF] = useState(false); 
  const [isHiddenRightF, setIsHiddenRightF] = useState(true)

  // Function to move the overlay div
    const moveDiv = () => {
    setOverlayPosition(prevPosition => prevPosition === 0 ? 50 : 0); // Toggle the position
    setIsHiddenLeft(hidden => !hidden); // Toggle the visibility of the left div!isHidden) // Toggle the visibility of the left div
    setIsHiddenRight(hidden =>!hidden);
    setOverlayPositionF(prevPosition => prevPosition === 50 ? 0 : 50); // Toggle the position
    setIsHiddenLeftF(hidden => !hidden); // Toggle the visibility of the left div!isHidden) // Toggle the visibility of the left div
    setIsHiddenRightF(hidden =>!hidden);  // Toggle the visibility of the right div!isHidden) // Toggle the visibility of the right div

};

  return (
    <div>
    
          <div id='overlay' className=' h-full flex flex-col  justify-center items-center overflow-hidden absolute z-50 w-1/2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'
           style={{ left: `${overlayPosition}%`, transition: 'left 0.7s ease-in-out' }} >

            <div className='relative'>

            <div id="left" className='absolute z-10'  style={{ transform: `translateX(${isHiddenLeft ? '-100%' : '0%'})`, transition: 'transform 0.5s ease-in-out' }}>
              <TestLeft />
            </div>

            <div id="right" className='absoulute z-20'  style={{ transform: `translateX(${isHiddenRight ? '100%' : '0%'})`, transition: 'transform 0.5s ease-in-out' }}>
               <TestRight/>
            </div>

            </div>
    
            <BtnTry texts="Click me" handleclick={moveDiv} className="relative top-3/4"/>
          </div>

          <div id='form' className=' h-full flex flex-col  justify-center items-center overflow-hidden absolute z-40 w-1/2'
           style={{ left: `${overlayPositionF}%`, transition: 'left 0.7s ease-in-out' }} >

            <div className='relative'>

            <div id="left" className='absolute z-10'  style={{ opacity: isHiddenLeftF ? 0 : 1 , transform: `translateX(${isHiddenLeftF ? '-100%' : '0%'})`, transition: 'all 0.5s ease-in-out' }}>
                
             <CreateAcc/>
            </div>

            <div id="right" className='absoulute z-20 left-5'  style={{ opacity: isHiddenRightF ? 0 : 1 , transform: `translateX(${isHiddenRightF ? '100%' : '0%'})`, transition: 'all 0.5s ease-in-out' }}>
            <SignIn/>
            </div>

            </div>
    
          </div>
          
          
        </div>
     
  );
}
