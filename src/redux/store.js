import { configureStore } from "@reduxjs/toolkit";
import { allIndividualSlice, individualMemberDeleteSlice, userDetailSlice, userMembersSlice } from "./slice/IndividualSlice";


export const store = configureStore({
    reducer: {
        allIndividuals: allIndividualSlice.reducer,
        userDetail: userDetailSlice.reducer,
        userMembers: userMembersSlice.reducer,
        individualMemberDelete: individualMemberDeleteSlice.reducer
    }
})