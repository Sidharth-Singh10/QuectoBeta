'use client'
import { useRouter } from 'next/navigation';
import React from 'react'

const OsignBtn = (props) => {
    const buttonStyle = {
        borderRadius: '20px',
        border: '1px solid #FFFFFF',
        backgroundColor: '#FF4B2B',
        color: '#FFFFFF',
        fontSize: '12px',
        fontWeight: 'bold',
        padding: '12px 45px',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        transition: 'transform 80ms ease-in',
      };

  const router = useRouter();
  const handleClick = () => {
    router.push(props.route);
  };

  return (
    <div>
      <button style={buttonStyle} onClick={handleClick} >{props.texts}</button>  
    </div>
  )
}

export default OsignBtn