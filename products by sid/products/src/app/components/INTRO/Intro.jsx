import React from 'react'
import styles from './Intro.module.css'
const Intro = () => {
  return (
    <div className= {styles.introHead} >
        <div className='w-1/2  '>

        <div className='flex flex-col items-start ml-9 mt-9  '>

        <div className='flex justify-center items-center'>
            <button className='text-2xl font-semibold btn'> <img src="/backarrow.png" alt="" className='' />
            BACK TO ALL SHOPS </button>
        </div>    

        <div className='flex flex-row  w-full mt-8'>
            <div className='w-1/4 flex justify-end'>
                <div className=' bg-white rounded-full flex'>
                    <img src="shrimp2.png" alt="" />

                </div>
            </div>

            <div className='flex flex-col  w-3/4'>
                <div className='flex '>
                    <div>
                      <span className='text-2xl font-bold '>LocalConnect</span>
                    </div>

                    <div className='pl-10  '>
                    <button className='btn btn-sm w-fit btn-outline bg-white'><img src="/star.png" alt="" className='h-6' />4.8 </button>
                    <button className='btn btn-circle btn-outline btn-sm ml-2 bg-white'><img src="/heartdark.png" alt="" className='h-6' /></button>
                

                    </div>
                   
                </div>

                <div className='flex mt-1 justify-around w-1/2 items-center '>
                    <div className='flex  '>
                    <img src="/bagdark.png" alt=""  className='h-6'/> $10
                    </div>
                    <img src="/dot.png" alt="" className='h-4 pl-2'/>
                    <div className='flex'>
                    <img src="/price.png" alt="" className='h-6' />$0.5
                    </div>
                    <img src="/dot.png" alt="" className='h-4 pl-2'/>
                    <div className='flex items-center'>
                    <img src="/truck.png" alt="" className='h-6' />$50
                    </div>

                </div>

            </div>


        </div>



        </div>



        </div>

        <div className='w-1/2 flex justify-center items-center'>

            <div className='bg-black flex h-1/2 flex-row justify-center items-center rounded-xl ' >

            <div className="flex items-center justify-center">
            <div className="relative">
            <img src="cert.png" className="h-20" alt="Certificate" />
            <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-black text-3xl pl-2 font-bold">50%</p>
            </div>
            </div>
            </div>
                <div className='text-white text-xl font-semibold '>
                    <p>
                    On All Bakery Products
                        </p>
                   <p>
                    After 9PM Everyday
                   </p>

                </div>

                <div className='hidden md:block'>
                    <img src="bakery.jpg" alt="" className='h-24 rounded-xl pr-3' />
                </div>

            </div>



        </div>
      


    </div>
  )
}

export default Intro