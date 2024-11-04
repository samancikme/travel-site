import React from 'react'
import Container from '../components/pageComp/Container'
import TourCard from '../components/pageComp/TourCard'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../components/pageComp/Loading'
import Button from '../components/pageComp/Button'
import { setSelectedDest } from '../store/slices/pageActionSlice'

const Tours = () => {
  const { tours, isTourLoad } = useSelector(state => state.tourSlice)
  const { selectedDest } = useSelector(state => state.pageActionSlice)
  console.log(typeof selectedDest)
  const dispatch = useDispatch()
  return (
    <div>
      <Container>
        <div>
          <h1 className='text-[24px] font-bold py-3'>Tour Packages</h1>
          {
            selectedDest ?
              <div>
                <div className='grid grid-cols-[repeat(auto-fill,minmax(450px,1fr))] gap-[10px] '>
                  {tours.filter(tour => tour.destinationId === selectedDest).map(item => (
                    <TourCard item={item} key={item.id} />
                  ))}
                </div>
                <div className='flex justify-center'>
                  <button
                    onClick={() => {
                      dispatch(setSelectedDest(null))
                    }}
                    className='mt-5 py-2 duration-500 font-medium text-[14px] active:scale-95 px-5 hover:bg-gray-300 rounded-lg'>
                    View All Tours
                  </button>
                </div>
              </div>
              :
              <div>
                {isTourLoad ?
                  <div>
                    <Loading />
                  </div>
                  :
                  <div className="mt-3 ">
                    <div className='grid grid-cols-[repeat(auto-fill,minmax(450px,1fr))] gap-[10px] '>
                      {tours.map(item => (
                        <TourCard item={item} key={item.id} />
                      ))}
                    </div>
                  </div>
                }
              </div>
          }
        </div>

      </Container>

    </div>
  )
}

export default Tours