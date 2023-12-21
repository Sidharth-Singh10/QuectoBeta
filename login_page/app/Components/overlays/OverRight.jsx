import React from 'react'
import OsignBtn from './OsignBtn'

const OverRight = () => {
  return (
    <div className=' h-full flex flex-col justify-center items-center' style={{ background: 'linear-gradient(to right, #FF4B2B, #FF416C)' }}>
    

        <div className='text-4xl font-extrabold text-white '>
            Hello,Friend!
        </div>

        <div className='flex justify-center mt-2'>

            <p className=' text-md text-white text-wrap mr-3 ml-3 pr-4 pl-4 text-center'>
                Enter your personal details and start journey with us
            </p>

        </div>

        <div className='mt-2'>
            <OsignBtn texts='Sign up'/>
        </div>



    </div>
  )
}

export default OverRight

