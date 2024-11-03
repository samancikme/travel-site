import React, { useEffect } from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { getAllDestData, getAllTourData } from '../api/request'
import Footer from '../pages/Footer'
import { toggleSidebar } from '../store/slices/pageActionSlice'


const MainLayout = () => {
  const baseUrl = "https:/travel-data-base.onrender.com"
  const dispatch = useDispatch()
  const { showSidebar } = useSelector(state => state.pageActionSlice)


  useEffect(() => {
    dispatch(getAllDestData(`${baseUrl}/destinations`))
    dispatch(getAllTourData(`${baseUrl}/offers`))
  }, [])
  return (
    <div onClick={()=>{
      if(showSidebar) {
       dispatch(toggleSidebar())
      }
    }} 
    className=' h-[100vh]  relative font-mont'>
      <div className=' bg-centerbg-cover '>
        <div className=' top-0 left-0 right-0 '>
          <Header />
        </div>
        <Outlet />
      </div>
      <div
        className={`max-w-[250px]  duration-500 min-w-[250px] md:hidden h-full sticky border-[1px] ${showSidebar ? "left-0" : "left-[-250px]"} shadow-md  rounded-md p-[10px] bg-white top-0 bottom-0 `}>
        <Sidebar />
      </div>
      <Footer/>
    </div>
  )
}

export default MainLayout