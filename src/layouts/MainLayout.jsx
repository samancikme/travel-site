import React, { useEffect } from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { getAllDestData, getAllTourData } from '../api/request'


const MainLayout = () => {
  const baseUrl = "https:/travel-data-base.onrender.com"
  const dispatch = useDispatch()
  const { showSidebar } = useSelector(state => state.pageActionSlice)


  useEffect(() => {
    dispatch(getAllDestData(`${baseUrl}/destinations`))
    dispatch(getAllTourData(`${baseUrl}/offers`))
  }, [])
  return (
    <div className=' h-[100vh ] relative font-mont'>
      <div className=' bg-cover bg-center'>
        <div className=' top-0 left-0 right-0'>
          <Header />
        </div>
        <Outlet />
      </div>
      <div
        className={`max-w-[250px]  duration-500 min-w-[250px] sm:hidden  border-[1px] ${showSidebar ? "left-0" : "left-[-250px]"} shadow-md  rounded-md p-[10px] bg-white top-0 bottom-0 absolute sm:static`}>
        <Sidebar />
      </div>
    </div>
  )
}

export default MainLayout