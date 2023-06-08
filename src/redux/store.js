import { configureStore } from "@reduxjs/toolkit";
import { allIndividualSlice, individualMemberDeleteSlice, updateIndividualSlice, userDetailSlice, userMembersSlice } from "./slice/IndividualSlice";
import { allGroupSlice, groupDetailSlice, groupMembersSlice } from "./slice/GroupSlice";


export const store = configureStore({
    reducer: {
        allIndividuals: allIndividualSlice.reducer,
        userDetail: userDetailSlice.reducer,
        userMembers: userMembersSlice.reducer,
        individualMemberDelete: individualMemberDeleteSlice.reducer,
        updateIndividualStatus: updateIndividualSlice.reducer,
        allGroups: allGroupSlice.reducer,
        groupMembers: groupMembersSlice.reducer,
        groupDetail: groupDetailSlice.reducer
    }
})