import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import request from "../../utils/request";

const getAllIndividuals = createAsyncThunk(
    "allIndividuals/getAllIndividuals",
    async ({limit, status}, { rejectWithValue }) => {

        let url = `/auth/allUsers?status=${status}`
        if (limit){
            url = `/auth/allUsers?limit=${limit}&status=${status}`
        }
        try {
            const { data } = await request.get(url, {
                withCredentials: true,
            });

            return data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
)

const getUserDetails = createAsyncThunk(
    "userDetails/getUserDetails",
    async (id, { rejectWithValue }) => {
        try {
            const { data } = await request.get(`/auth/member-detail/${id}`, {
                withCredentials: true,
            });

            return data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
)

export {getAllIndividuals, getUserDetails}
