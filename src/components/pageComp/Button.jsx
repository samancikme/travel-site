import React from 'react'

const Button = ({children,icon, addStyle}) => {
  return (
    <button  className={` cursor-pointer ${addStyle} duration-500 text-[20px] py-2 px-3 border-gray-500 active:scale-95 flex justify-center items-center`}>
      {children}
    </button>
  )
}

export default Button