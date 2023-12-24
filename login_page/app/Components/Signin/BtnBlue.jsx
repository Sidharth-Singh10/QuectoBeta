import React from 'react'

const BtnBlue = (props) => {
  return (
    <div>
        <button className="btn bg-[#da4bb1] 
      hover:bg-[#ff392b]
       pt-3 pb-3 pl-10 pr-10
        uppercase
         text-white font-bold
         hover:shadow-md hover:shadow-orange-500
         ">{props.texts}</button>
    </div>
  )
}

export default BtnBlue