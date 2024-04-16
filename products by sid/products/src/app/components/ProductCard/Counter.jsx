"use client"

import { React, useState } from 'react'

 
export default function Counter() {
  const [counter, setCounter] = useState(0);
 
  //increase counter
  const increase = () => {
    setCounter(count => count + 1);
  };
 
  //decrease counter
  const decrease = () => {
    setCounter(count => count - 1);
  };
 
  //reset counter 
  const reset = () =>{
    setCounter(0)
  }
 
  return (
    <div className="flex justify-around items-center border border-gray-400 rounded-lg w-10">
      <span className="text-black">{counter}</span>

      <div className="flex flex-col mt-1 ">

        <button className=" h-4 " onClick={increase}><img src="/arrup.png" className='h-4' /></button>
        <button className=" h-4 " onClick={decrease}><img src="/arrdown.png" className='h-4' /></button>
      </div>
    </div>
  );
}