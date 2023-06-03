import { configureStore } from "@reduxjs/toolkit";
import { allIndividualSlice, userDetailSlice } from "./slice/IndividualSlice";


export const store = configureStore({
    reducer: {
        allIndividuals: allIndividualSlice.reducer,
        userDetail: userDetailSlice.reducer,
    }
})