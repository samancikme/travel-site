import React from 'react'

const DestCard = ({item}) => {
  return (
    <div className='p-[10px] rounded-md shadow-md border-[1px] h-full flex flex-col justify-between gap-1 '>
        <div>
          <img className='h-[200px] object-cover rounded-md shadow-sm ' src={item.image} alt="" />
        </div>
    </div>
  )
}

export default DestCard