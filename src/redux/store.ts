import {configureStore} from "@reduxjs/toolkit";
import {questionsReducer} from "./questionsSlice";
import {filterReducer} from "./filterSlice";
import {serviseReducer} from "./serviseSlice";

export const store = configureStore({
	reducer: {
		questions: questionsReducer,
		filter: filterReducer,
		servise: serviseReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
