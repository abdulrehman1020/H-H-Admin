import { createSlice } from "@reduxjs/toolkit";
import { getAllIndividuals, getUserDetails } from "../action/IndividualAction";

const allIndividualSlice = createSlice({
    name: "individuals",
    initialState: {
      loading: false,
      success: false,
      individualList: null,
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
        .addCase(getAllIndividuals.pending, (state) => {
          state.loading = true;
        })
        .addCase(getAllIndividuals.fulfilled, (state, action) => {
          state.loading = false;
          state.success = action.payload.success;
          state.individualList = action.payload;
        })
        .addCase(getAllIndividuals.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload?.error;
        });
    },
  });

  const userDetailSlice = createSlice({
    name: "userDetails",
    initialState: {
      loading: false,
      success: false,
      user: null,
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
        .addCase(getUserDetails.pending, (state) => {
          state.loading = true;
        })
        .addCase(getUserDetails.fulfilled, (state, action) => {
          state.loading = false;
          state.success = action.payload.success;
          state.user = action.payload;
        })
        .addCase(getUserDetails.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload?.error;
        });
    },
  });

export {allIndividualSlice, userDetailSlice}  