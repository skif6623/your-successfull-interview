import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://63c44b33f0028bf85fa64c21.mockapi.io";

export const fetchQuestions = createAsyncThunk("questions/fetchAll", async (_, thunkAPI) => {
	try {
		const response = await axios.get("/questions");
		return response.data;
	} catch (error: any) {
		return thunkAPI.rejectWithValue(error.message);
	}
});
