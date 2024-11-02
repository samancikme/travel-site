import React from 'react'
import Container from './pageComp/Container'
import { NavLink } from 'react-router-dom'
import Button from './pageComp/Button'
import { setSelectLang, toggleLang } from '../store/slices/pageActionSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { langData } from '../config/const'

const Header = () => {
  const { showLang, selectedLang } = useSelector(state => state.pageActionSlice)
  const dispatch = useDispatch()
  const { t, i18n } = useTranslation()
  function handleLangChange(lang) {
    dispatch(toggleLang())
    dispatch(setSelectLang(lang))
    i18n.changeLanguage(lang.toLowerCasa())
  }


  const selectLang = langData.find(item => item.title === selectedLang)
  console.log(selectedLang)
  console.log(langData)


  

  return (
    <div className='flex items-center h-[100px] border-[1px] justify-between shadow-md rounded-md p-[10px] gap-1 bg-gray-700 border-gray-600'>
      <Container className='flex justify-between items-center'>
        <div className='bg-transparent text-[24px] text-white'>
          TRXL
        </div>

        <div className='sm:flex hidden justify-end items-center gap-[10px] '>
          <ul className="flex justify-between items-center gap-[10px] text-white ">
            <li className="text-[18px] font-semibold hover:text-gray-300 ">
              <NavLink to={"/"}>
                Home
              </NavLink>
            </li>

            <li className="text-[18px] font-semibold hover:text-gray-300">
              <NavLink to={"/destination"}>
                Destination
              </NavLink>
            </li>

            <li className="text-[18px] font-semibold hover:text-gray-300">
              <NavLink to={"/tours"}>
                Tours
              </NavLink>
            </li>
          </ul>
        </div>
        <div className=' relative flex justify-between gap-2 text-white'>
          <div>
            <div className='flex justify-between items-center gap-2'>
              <Button >
                Sign Up
              </Button>
              <Button>
                Log in
              </Button>
            </div>
          </div>
          <div>
            <button onClick={() => dispatch(toggleLang())} className='py-[5px] flex justify-center items-center gap-1 px-[5px] rounded-md  border-[1px]  active:scale-95 text-[16px] font-semibold'>
              <img className='w-[20px] h-[20px] object-contain  ' src={selectLang.img} alt="" />
              <span>{selectLang.title}</span>
            </button>
            <div className={`absolute ${showLang ? "flex" : "hidden"} bottom-0 translate-y-[102%] w-[100px] right-[-20%] bg-white text-black p-[5px] border-[1px] rounded-md flex-col gap-1`}>
              {langData.map(item => (
                <button onClick={() => handleLangChange(item.title)} key={item.id} className='py-[5px] flex justify-center items-center gap-1 px-[5px] rounded-md    active:scale-95 text-[16px] font-semibold'>
                  <img className='w-[20px] h-[20px] object-contain ' src={item.img} alt="" />
                  <span>{item.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Header