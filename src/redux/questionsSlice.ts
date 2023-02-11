import {createSlice} from "@reduxjs/toolkit";
// import type {PayloadAction} from "@reduxjs/toolkit";
// import type {RootState} from "./store";
import {fetchQuestions} from "./operations";

interface IQItem {
	id: string;
	question: string;
	answer: string;
	categiry: string;
}

interface IQState {
	questions: IQItem[];
}

const questionsInitialState: IQState = {
	questions: [],
};

const questionsSlice = createSlice({
	name: "questions",
	initialState: questionsInitialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchQuestions.fulfilled, (state, action) => {
			state.questions = action.payload;
		});
	},
});

export const questionsReducer = questionsSlice.reducer;
