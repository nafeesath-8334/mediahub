import { createSlice } from "@reduxjs/toolkit";

const mediahubSlice=createSlice({
    name:"mediahub",
        initialState:{
        isLoggedIn:false,
    },
    reducers:{
        updateIsLoggedIn:(state,action)=>{
            state.isLoggedIn=action.payload;
        }
    }
})
export const{updateIsLoggedIn}=mediahubSlice.actions;
export default mediahubSlice.reducer