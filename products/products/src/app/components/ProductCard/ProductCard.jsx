import React from 'react'
import Counter from './Counter'
import AddtoCart from './AddtoCart'

const ProductCard = ({imgsrc,proname,onAddToCart }) => {
  return (
    <div>

            <div className='rounded-lg flex flex-col  items-start border border-gray-400  w-5/6  '>

                <div className='h-1/2 m-2 flex'>
                    <img src={imgsrc} />
                </div>

                <div className='pl-2'>
                    {proname}
                </div>
                    <div className='flex flex-col items-center w-full '>

                    
                <div className='flex justify-between'>
                    <div className='flex justify-around items-center'>
                        <div className='text-black font-bold text-md flex'>
                            $0.99
                        </div>
                        <div className='text-gray-400 font-semibold text-sm flex'>
                            /1pc
                        </div>
                    </div>

                    <div className='mr-2 ml-2'>
                        <Counter/>
                    </div>
                    

                </div>
                <div className='mb-2 mt-2'>
                    <AddtoCart onAddToCart={onAddToCart} />
                </div>
                

            </div>
            </div>



    </div>
  )
}

export default ProductCard