import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    data: []
}

export const darkModeSlice = createSlice({
    name: 'darkmode',
    initialState,
    reducers: {
        darkmodeOn: (state,action) =>{
            state.status = action.payload
        }
    }
})

export const {darkmodeOn} = darkModeSlice.actions

const darkModeReducer = darkModeSlice.reducer
export default darkModeReducer

