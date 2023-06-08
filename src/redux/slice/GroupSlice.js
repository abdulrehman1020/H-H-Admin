import { createSlice } from "@reduxjs/toolkit";
import { getAllGroups, getGroupDetails, getGroupMembers } from "../action/GroupAction";

const allGroupSlice = createSlice({
    name: "groups",
    initialState: {
      loading: false,
      success: false,
      groupList: null,
      error: "",
    },
    reducers: {
    //   hostListReset: (state) => {
    //     state.loading = false;
    //     state.success = false;
    //     state.hostList = null;
    //     state.error = "";
    //   }
    },
    extraReducers: (builder) => {
      builder
        .addCase(getAllGroups.pending, (state) => {
          state.loading = true;
        })
        .addCase(getAllGroups.fulfilled, (state, action) => {
          state.loading = false;
          state.success = action.payload.success;
          state.groupList = action.payload;
        })
        .addCase(getAllGroups.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload?.error;
        });
    },
  });

  const groupMembersSlice = createSlice({
    name: "groupMembers",
    initialState: {
      loading: false,
      members: [],
      error: "",
    },
    reducers: {
      hostPropertiesReset: (state) => {
        state.loading = false;
        state.members = [];
        state.error = "";
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(getGroupMembers.pending, (state) => {
          state.loading = true;
        })
        .addCase(getGroupMembers.fulfilled, (state, action) => {
          state.loading = false;
          state.members = action.payload;
        })
        .addCase(getGroupMembers.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload?.error;
          state.members = []
        });
    },
  });

  const groupDetailSlice = createSlice({
    name: "groupDetails",
    initialState: {
      loading: false,
      success: false,
      group: null,
      error: "",
    },
    // reducers: {
    //   hostDetailsReset: (state) => {
    //     state.loading = false;
    //     state.success = false;
    //     state.host = null;
    //     state.error = "";
    //   }
    // },
    extraReducers: (builder) => {
      builder
        .addCase(getGroupDetails.pending, (state) => {
          state.loading = true;
        })
        .addCase(getGroupDetails.fulfilled, (state, action) => {
          state.loading = false;
          state.success = action.payload.success;
          state.group = action.payload;
        })
        .addCase(getGroupDetails.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload?.error;
        });
    },
  });

export {allGroupSlice, groupMembersSlice, groupDetailSlice}  