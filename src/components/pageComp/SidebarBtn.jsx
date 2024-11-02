import React from 'react'

const SidebarBtn = ({children}) => {
  return (
    <div>
      <button className={`py-[7px] duration-300  px-[15px] w-full text-[16px] border-[1px]  bg-orange-500 text-white   flex justify-start font-[600] items-center gap-2 shadow-sm rounded-md hover:bg-gray-100 active:scale-95`}>
        {children}
      </button>
    </div>
  )
}

export default SidebarBtn