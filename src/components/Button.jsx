import React from 'react'

const Button = ({bgColor,color,size,borderRadius,text}) => {
  return (
    <button 
    type='button' style={{ background: bgColor, color, borderRadius }} 
    className={`text-${size} p-2 hover:drop-shadow-xl`}>
      {text}
    </button>
  )
}

export default Button