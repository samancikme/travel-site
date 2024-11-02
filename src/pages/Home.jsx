import { BsTropicalStorm } from "react-icons/bs"; 
import { FaSkiingNordic } from "react-icons/fa"; 
import { GiCastle } from "react-icons/gi"; 
import { GiCampCookingPot } from "react-icons/gi"; 
import { TbSignature } from "react-icons/tb"; 
import { MdHouseboat } from "react-icons/md"; 
import { MdLocationCity } from "react-icons/md"; 
import { GiMountainCave } from "react-icons/gi"; 
import { GiDesert } from "react-icons/gi"; 
import { TbBeachOff } from "react-icons/tb"; 
import React from 'react'
import Container from '../components/pageComp/Container'
import ButtonIcons from '../components/pageComp/ButtonIcons'

const Home = () => {
  return (
   <div>
     <div className=' min-w-[calc(100vh-90px)] bg-backgroundImage min-h-[calc(100vh-100px)]  bg-no-repeat bg-center bg-cover text-white'>
      <Container>
      <div className='flex flex-col justify-center items-start py-8'>
      <h1 className='text-[80px] font-bold '>
       The whole world <br/> awaits.
       </h1>
       <div className='bg-white flex  rounded-full w-full opacity-50  relative mt-4'> 
        <input type="text" placeholder='Search destinations'  className='px-8 py-4 rounded-full border-[1px] w-full outline-none shadow-sm cursor-pointer '/>
        <button className='px-8 py-2 right-[10px] top-[8px] bottom-[8px] bg-blue-500 rounded-full absolute cursor-pointer'>Search</button>
       </div>
       <div className='mt-7'>
        <h2 className="text-[40px]">Top Categories</h2>
        {/* <div className='flex justify-between items-center gap-[60px] py-4 px-7 max-w-[1440px]  min-w-full '>
          <ButtonIcons  icon={TbBeachOff } children={"beaches"}/>
          <ButtonIcons  icon={GiDesert } children={"Hello"}/>
          <ButtonIcons  icon={GiMountainCave } children={"Hello"}/>
          <ButtonIcons  icon={MdLocationCity } children={"Hello"}/>
          <ButtonIcons  icon={MdHouseboat  } children={"Hello"}/>
          <ButtonIcons  icon={TbSignature } children={"Hello"}/>
          <ButtonIcons  icon={GiCampCookingPot  } children={"Hello"}/>
          <ButtonIcons  icon={GiCastle  } children={"Hello"}/>
          <ButtonIcons  icon={FaSkiingNordic } children={"skiing"}/>
          <ButtonIcons  icon={BsTropicalStorm   } children={"Hello"}/>
        </div> */}
       </div>
      </div>
      
      </Container>
     </div>
     <Container>
      kfdjbndxjkfnjknj
     </Container>
     
   </div>
  )
}

export default Home