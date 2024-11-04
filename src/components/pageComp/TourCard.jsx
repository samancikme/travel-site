import React from 'react'

const TourCard = ({item,className}) => {
  return (
    <div className={`p-[10px] rounded-md shadow-md border-[1px] h-full flex flex-col justify-between gap-2 group relative overflow-hidden ${className}`}>
      <div className="relative overflow-hidden rounded-md">
        <img
          className="h-[400px]  w-full  object-cover rounded-md shadow-md transform group-hover:scale-95 transition duration-300"
          src={item.images}
          alt={item.name}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
      </div>
      <div className="absolute bottom-0 left-0 p-4 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
        <h2 className="text-lg font-semibold">{item.name}</h2>
        <p className='text-lg font-semibold'>France</p>

        {/* Stars */}
        {/* <div className="flex items-center my-1">
          {[...destination(item.stars)].map((_, index) => (
            <span key={index} className="text-yellow-400">★</span>
          ))}
          {[...destination(5 - item.stars)].map((_, index) => (
            <span key={index} className="text-gray-400">★</span>
          ))}
        </div> */}
        

        {/* Price */}
        <div className="mt-2 font-semibold">
          Цена: <span className="text-orange-400">${item.price}</span>
        </div>

        
        <button className="mt-3 px-4 py-2 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition duration-300">
          Read More
        </button>
      </div>
    </div>
  );
};
  


export default TourCard