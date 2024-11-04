import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const TourDetail = ({ item }) => {
    const { tours, isTourLoad } = useSelector(state => state.tourSlice)
    const { slug } = useParams()
    const selectedTour = tours.filter(tour => tour.slug === slug)
    console.log(selectedTour)
    return (
        <div>
            asdadklnalsndsn
        </div>
    )
}

export default TourDetail
