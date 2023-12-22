'use client'
import { useRouter } from 'next/navigation';
import React from 'react'

const OsignBtn = (props) => {

  const router = useRouter();
  const handleClick = () => {
    router.push(props.route);
  };

  return (
    <div>
   

      <button className='btn bg-[#FF4B2B] border border-[#FFFFFF]
       pl-10 pr-10
      font-bold
      uppercase
      text-white
      hover:bg-[#FF4B2B]
      '
      onClick={handleClick}
      >{props.texts}</button>

    </div>
  )
}

export default OsignBtn