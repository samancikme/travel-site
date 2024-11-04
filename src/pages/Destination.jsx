import { BsArrowRight } from "react-icons/bs";
import React from 'react'
import DestCard from '../components/pageComp/DestCard'
import { useSelector } from 'react-redux'
import Loading from '../components/pageComp/Loading'
import Button from '../components/pageComp/Button'
import Container from '../components/pageComp/Container'
import videoImg from "../img/image 1.png"
import { BiArrowBack, BiArrowFromRight } from 'react-icons/bi'
import { Link } from "react-router-dom";

const Destination = () => {
   const { destinations, isDestLoad } = useSelector(state => state.destinationSlice)
   console.log(destinations)
   return (
      <div className="mt-2">
         <Container>
            <div className='flex justify-center  border-[1px] border-gray-200 shadow-lg rounded-md py-4 px-5'>
               <div className='flex flex-col gap-2 flex-1'>
                  <h3 className='text-[35px]  text-orange-500'>Destinations</h3>
                  <p className='py-3 text-[18px] font-medium'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At eius sequi repudiandae, reiciendis possimus tempora odit repellendus officia recusandae quod, magnam deserunt quibusdam eveniet, vero eos praesentium amet error iusto?</p>
                  <div className='flex relative text-orange-500'>
                     <Button
                        children={"View All Tours"}
                        addStyle={"rounded-md border-[1px] border-orange-600"} />
                  </div>
               </div>
               <div className='flex-1'>
                  <img
                     className="rounded-md"
                     src={videoImg}
                     alt="image" />
               </div>
            </div>
            {isDestLoad ?
               <div>
                  <Loading />
               </div>
               :
               <div className="mt-3 ">
                  <h1 className="text-center text-[34px] font-semibold py-4 text-orange-500">
                     All Destinations
                  </h1>
                  <div className='grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-[10px] '>
                     {destinations.map(item => (
                        <DestCard item={item} key={item.id} />
                     ))}
                  </div>
               </div>}
         </Container>
      </div>

   )
}

export default Destination
