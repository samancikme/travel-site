import React from 'react'
import DestCard from '../components/pageComp/DestCard'
import { useSelector } from 'react-redux'
import Loading from '../components/pageComp/Loading'

const Destination = () => {
  const {destinations,isDestLoad} = useSelector(state =>state.destinationSlice)
    return (
     <div >
        {isDestLoad? 
        <div>
          
           <Loading/>
        </div> 
        :
        <div className='grid grid-cols-[reapeat(auto-fill, minmax(200px,1fr))] gap-[10px]'>
           {destinations.map(item => (
              <DestCard item={item} key={item.id}/>
           ))}
        </div>
        }
     </div>
      
    )
  }
  
  export default Destination