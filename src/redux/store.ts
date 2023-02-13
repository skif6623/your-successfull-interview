import {configureStore} from "@reduxjs/toolkit";
import {questionsReducer} from "./questionsSlice";
import {filterReducer} from "./filterSlice";

export const store = configureStore({
	reducer: {
		questions: questionsReducer,
		filter: filterReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
