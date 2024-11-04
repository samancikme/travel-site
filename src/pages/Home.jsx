import { BsArrowRight } from "react-icons/bs"; 
import React from 'react'
import Container from '../components/pageComp/Container'
import DestCard from "../components/pageComp/DestCard";
import { useSelector } from "react-redux";
import Loading from "../components/pageComp/Loading";
import Button from "../components/pageComp/Button";
import { Link } from "react-router-dom";
import bgGirl from "../img/about picture.png"

const Home = () => {
  const {destinations,isDestLoad} = useSelector(state =>state.destinationSlice)
  return (
    <div>
      <div className=' min-w-[calc(100vh-400px)] bg-backgroundImage min-h-[calc(100vh-100px)] bg-no-repeat bg-center bg-cover text-white'>
        <Container>
          <div className='flex flex-col justify-center items-start py-8'>
            <h1 className='sm:text-[80px] font-bold text-[50px] '>
              The whole world <br /> awaits.
            </h1>
            <form className='bg-white flex text-black rounded-full w-full opacity-50  relative mt-4'>
              <input
                type="text"
                placeholder='Search destinations'
                className='px-8 py-4 rounded-full border-[1px] w-full outline-none shadow-sm' />
              <button
                type="submit"
                className='px-8 py-2 right-[10px] top-[8px] bottom-[8px] bg-gray-300  rounded-full absolute cursor-pointer'>Search</button>

            </form>
           
          </div>

        </Container>
      </div>
      <Container>
      {isDestLoad? 
        <div>
           <Loading/>
        </div> 
        :
        <div className="mt-3 w-full ">
          <h1 className="text-center text-[34px]  font-semibold py-4 text-orange-500">Top Vocation Destinations</h1>
          <div className='grid  w-full   sm:grid-cols-[repeat(auto-fill,minmax(450px,1fr))] gap-[10px] justify-center'>
           {destinations.destinations?.slice(0,3).map(item => (
              <DestCard className={""} item={item} key={item.id}/>
           ))}
        </div>
       
        </div>
        }
        <div className="text-center justify-center items-center flex mt-3">
         <Link to={"/destination"}> <Button icon={BsArrowRight } children={"More..."} addStyle={"border-[1px] border-orange-500 rounded-full py-2 px-6 text-orange-500 "} /></Link>
        </div>

        <div className="mt-7 flex-col sm:flex-row text-center sm:text-start gap-2 sm:flex justify-center items-center ">
           <div className="flex-1">
            <img src={bgGirl} alt="" />
           </div>

           <div className="flex-1 font-bold">
              <h4 className="text-[16px] text-gray-400">WELCOME TO OUR SITE</h4>
              <h2 className="text-[30px] ">We are the best company
              for your visit</h2>
              <p className="text-gray-500 py-3">After decades of experience, and a whole life in Lucca, we offer you the most complete tourism service in the city. In addition to having bikes and rickshaws to have as much fun as you want, you have the choice of tour guides with whom to tour and drivers for your every need! We offer packages in the way that you get the most at the lowest price. Book with us and we will always be available for you!</p>
              <div className="flex flex-wrap justify-between items-center text-center py-3">
                <div className="w-1/2 sm:w-1/4"> <span className="text-orange-500 text-[25px] ">20+</span> <p className='text-gray-400'>Years <br /> Experience</p></div>
                <div className="w-1/2 sm:w-1/4"> <span className="text-orange-500 text-[25px] ">100+</span> <p className='text-gray-400'>Happy <br /> Customer</p></div>
                <div className="w-1/2 sm:w-1/4"> <span className="text-orange-500 text-[25px] ">15+</span> <p className='text-gray-400'>Choice <br /> of Services</p></div>
                <div className="w-1/2 sm:w-1/4"> <span className="text-orange-500 text-[25px] ">10+</span> <p className='text-gray-400'>Proffesional <br /> Guides</p></div>

              </div>
          
           </div>
        </div>
      </Container>

    </div>
  )

  
}

export default Home