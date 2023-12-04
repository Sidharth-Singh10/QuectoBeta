import React from 'react'
import Cartbtn from './Cartbtn';

const Header = () => {
 

  return (
    <div className='bg-black flex flex-row justify-center items-center h-24'>

      <div className='w-1/4 flex justify-center '>

        <img src="" alt="" />
        <div className='text-white text-2xl font-semibold'>LocalConnect</div>

      </div>

      <div className='w-2/4 flex justify-center  ml-10'>
      <div className="relative w-full ml-10">
          <input
            type="text"
            placeholder="Search for Products"
            className="input input-bordered bg-slate-400 text-black placeholder-black pl-10 pr-8 w-3/4" // Added pr-8 for right padding
          />
          <img
            src="/mag.png"
            alt=""
            className="absolute inset-y-0 left-0 ml-3 my-auto h-5 pointer-events-none" // Adjust position and size as needed
          />
        </div>
      </div>

      <div className='w-1/4 flex justify-around items-center pl-10 pr-10 '>

      <button className="btn btn-outline btn-circle">
        <img src="/icons8-heart-50.png" alt="" />
      </button>

      <Cartbtn/>

      <div className="btn btn-circle btn-ghost">
      <div className="w-12 rounded-full">
        <img src="/avatar.png" className='w-12 rounded-full' />
       
      </div>
      </div>
      </div>


  </div>
  )
}

export default Header