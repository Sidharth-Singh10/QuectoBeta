import React from 'react'
import OsignBtn from './OsignBtn'
// style={{ background: 'linear-gradient(to right, #FF4B2B, #FF416C)' }}
const OverLeft = (props) => {
  return (
    <div className=' h-full flex flex-col justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...' >
    

        <div className='text-4xl font-extrabold text-white '>
           Welcome BACK!
        </div>

        <div className='flex justify-center mt-2'>

            <p className=' text-md text-white text-wrap mr-3 ml-3 pr-4 pl-4 text-center'>
                Enter your personal details and start journey with us
            </p>

        </div>

        <div className='mt-2'>
            <OsignBtn texts='Login' route={props.routes}/>
        </div>



    </div>
  )
}

export default OverLeft

