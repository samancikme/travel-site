import React from 'react'

const Button = ({children, addStyle,className}) => {
  return (
    <button  className={` cursor-pointer ${addStyle}  text-[20px] active:scale-95 flex justify-center items-center`}>
      {children}
    </button>
  )
}

export default Button