import React from 'react'

const ButtonIcons = ({ icon, children }) => {
  return (
    <div className='flex flex-col gap-[6px] justify-between items-center text-gray-400 cursor-pointer active:scale-95 '>
      <div className='text-[24px]'>
        {icon()}
      </div>
      <div className='text-[18px]'>
        {children}
      </div>
    </div>
  )
}

export default ButtonIcons