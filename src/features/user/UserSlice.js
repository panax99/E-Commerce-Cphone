import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData:[],
    signedUp:false,
}

const UsersFetch = createAsyncThunk( 'users/usersFetch',async(res)=>{
    const res = await axios.get('http:localhost/5000')
    }   
)

const UserSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        signupSuccess: (state,action) =>{
            state.userData = action.payload;
            state.signedUp = true
        }
    },

})

