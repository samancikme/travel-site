import React from 'react'

const Button = ({children,icon, addStyle}) => {
  const Icon = icon
  return (
    <button  className={` cursor-pointer ${addStyle}  text-[20px] py-2 px-3 border-gray-500 active:scale-95 flex justify-center items-center`}>
      {children}
      {Icon}
    </button>
  )
}

export default Button