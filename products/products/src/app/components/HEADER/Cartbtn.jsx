import React from 'react'

const Cartbtn = () => {
 
      return (
    <div>
        <button className="btn btn-outline w-fit" id='cart'>
        <img src="/bag.png" className='w-8'/>
      <div className="badge tex-black font-bold" id='cartnum'> 0 </div>
      </button>
    </div>
  )
}

export default Cartbtn