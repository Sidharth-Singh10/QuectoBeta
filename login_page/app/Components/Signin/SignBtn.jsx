'use client'
import React from 'react'

const SignBtn = (props) => {
    const buttonStyle = {
        borderRadius: '20px',
        border: '1px solid #FF4B2B',
        backgroundColor: '#FF4B2B',
        color: '#FFFFFF',
        fontSize: '12px',
        fontWeight: 'bold',
        padding: '12px 45px',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        transition: 'transform 80ms ease-in',
      };

  return (
    <div>
      <button style={buttonStyle}>{props.texts}</button>  
    </div>
  )
}

export default SignBtn