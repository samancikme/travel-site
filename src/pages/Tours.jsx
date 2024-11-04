import React from 'react'
import Container from '../components/pageComp/Container'
import TourCard from '../components/pageComp/TourCard'
import { useSelector } from 'react-redux'
import Loading from '../components/pageComp/Loading'

const Tours = () => {
  const {tours,isTourLoad} = useSelector(state =>state.tourSlice)
  return (
    <div>
      <Container>
        <div>
                 <h1 className='text-[24px] font-bold py-3'>Tour Packages</h1>

        {isTourLoad? 
        <div>
          
           <Loading/>
        </div> 
        :
        <div className="mt-3 ">
          <div className='grid grid-cols-[repeat(auto-fill,minmax(450px,1fr))] gap-[10px] '>
           {tours.map(item => (
              <TourCard item={item} key={item.id}/>
           ))}
        </div>
        </div>
        }
        </div>
      
      </Container>

    </div>
  )
}

export default Tours