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
    <div className='flex items-center h-[80px] justify-between p-[10px] gap-1'>
      <Container className='flex justify-between items-center'>
        <div className='bg-white text-[24px] text-black'>
          TRXL
        </div>
        <div className='sm:flex hidden justify-end items-center gap-[10px] '>
          <div className="flex justify-between items-center gap-[10px] text-gray-600 ">
            <NavLink
              className="text-[18px] font-semibold"
              to={"/"}>
              Home
            </NavLink>

            <NavLink
              className="text-[18px] font-semibold"
              to={"/destination"}>
              Destination
            </NavLink>

            <NavLink
              className="text-[18px] font-semibold"
              to={"/tours"}>
              Tours
            </NavLink>
          </div>
        </div>
        <div className='relative flex justify-between items-center gap-2 text-black'>
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
            <button
              onClick={() => dispatch(toggleLang())}
              className='py-[5px] flex justify-center items-center gap-1 px-[5px] rounded-md  border-[1px]  active:scale-95 text-[16px] font-semibold'>
              <img
                className='w-[20px] h-[20px] object-contain'
                src={selectLang.img}
                alt="image" />
              <span>{selectLang.title}</span>
            </button>
            <div
              className={`absolute ${showLang ? "flex" : "hidden"} bottom-0 translate-y-[102%] w-[100px] right-[-20%] bg-white text-black p-[5px] border-[1px] rounded-md flex-col gap-1`}>
              {langData.map(item => (
                <button onClick={() => handleLangChange(item.title)} key={item.id} className='py-[5px] flex justify-center items-center gap-1 px-[5px] rounded-md    active:scale-95 text-[16px] font-semibold'>
                  <img
                    className='w-[20px] h-[20px] object-contain '
                    src={item.img}
                    alt="image" />
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