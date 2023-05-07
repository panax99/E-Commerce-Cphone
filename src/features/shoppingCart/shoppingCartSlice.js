import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    contents: []
}

const shoppingCartSlice = createSlice({
    name: 'shoppingCart',
    initialState,
    reducers : {
        changeStatus : (state,action) => {
            state.status = action.payload
        },
        addToCart: (state,action) => {
            const itemInCart = state.contents.find(content => content.id === action.payload.id)
            if (itemInCart){
                itemInCart.quantity++
            } else {
                state.contents.push({...action.payload,quantity:1})
                 
            }      
        },
        incrementQtt: (state,action) =>{
            const item = state.contents.find(content => content.id === action.payload)
            item.quantity++
        },
        decrementQtt: (state,action) =>{
            const item = state.contents.find(content => content.id === action.payload)
            item.quantity--
        },
        removeToCart: (state,action) => {
            state.contents = action.payload
        }
    }
})
export const {addToCart,removeToCart,incrementQtt,decrementQtt} = shoppingCartSlice.actions
const shoppingCartReducer = shoppingCartSlice.reducer
export default shoppingCartReducer