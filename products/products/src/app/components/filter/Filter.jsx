import React from 'react'

const Filter = () => {
  return (
    <div className='flex justify-between'>
        <div className='flex flex-col items-start w-1/2'>

            <div className='text-2xl flex font-bold text-black'>
                SEARCH RESULTS FOR RED FRUIT
                <button className='btn btn-sm btn-ghost'>X</button>

            </div>
            
            <div className='text-xl font-semibold text-gray-600'>
                Showing 6 results

            </div>


        </div>


        <div className='flex justify-end items-center w-1/2 '>

            <div className='flex items-center'>
                    <button className='btn btn-outline btn-ghost '> <img src="filter.png" alt="" /></button>
            </div>

            <div>
                <details class="dropdown">
                    <summary class="m-1 btn border border-gray-500 btn-ghost">SORT by: MOST POPULAR</summary>
                    <ul class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                     <li><a>Item 1</a></li>
                     <li><a>Item 2</a></li>
                    </ul>
                </details>

            </div>

        </div>
        

    </div>
  )
}

export default Filter