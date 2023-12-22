'use client'
import React, { useState } from 'react'

const TextField = (props) => {
    const [isClicked, setIsClicked] = useState(false);
    const inputSyle = 
    {
      backgroundColor: '#eee',
      paddingLeft: '0.5rem',
    }

   

  return (
    <div>
        <input type={props.types} placeholder={props.placeholder} 
        className={` text-gray-700 h-8  ${isClicked ? 'border-2 border-purple-500' : ''}`} 
        onClick={() => setIsClicked(!isClicked)}
        style = {inputSyle}/ >
        
    </div>
  )
}

export default TextField