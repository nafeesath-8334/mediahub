import { configureStore } from "@reduxjs/toolkit";
import mediahubReducer from "../reduxTool/slice";
export const store= configureStore({
    reducer:{
        mediahub:mediahubReducer,
    }
})