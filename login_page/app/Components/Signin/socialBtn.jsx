'use client'
import React from 'react'

const SocialBtn = () => {
  return (
    <div className="flex justify-around gap-4">
        <button className="rounded-lg border h-10 w-10 border-solid  border-gray-300 flex justify-center items-center">

        <img src="/facebook.png" className='h-5'/>

        </button>

        <button className="rounded-lg border h-10 w-10 border-solid  border-gray-300 flex justify-center items-center">
        <img src="/google.png"  className='h-5'/>
        </button>

        <button className="rounded-lg border h-10 w-10 border-solid  border-gray-300 flex justify-center items-center">
        <img src="/x.png" className='h-5' />
        </button>


    </div>
  )
}

export default SocialBtn