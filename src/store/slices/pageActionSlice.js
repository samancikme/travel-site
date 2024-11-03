import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    showSidebar: false,
    showLang: false,
    selectedLang: "ENG",
    selectedDest:null
}


const pageActionSlice = createSlice(
    {
        name: "page-actions",
        initialState,
        reducers: {
            toggleSidebar: (state) => {
                state.showSidebar = !state.showSidebar
            },
            toggleLang: (state) => {
                state.showLang = !state.showLang
            },
            setSelectLang: (state, action) => {
                state.selectedLang = action.payload
            },
            setSelectedDest: (state, action) => {
                state.selectedDest = action.payload
            }
        }
    }
)


export const { toggleSidebar, toggleLang, setSelectLang,setSelectedDest } = pageActionSlice.actions


export default pageActionSlice.reducer