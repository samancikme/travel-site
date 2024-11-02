import React from 'react'

const ButtonIcons = ({icon,children}) => {
  return (
    <div className='flex flex-col gap-[10px] text-[30px] justify-between items-center text-gray-400 cursor-pointer active:scale-95 '>
        {icon()}
        {children}
    </div>
  )
}

export default ButtonIcons