import {IGlobalStore} from "../types/types";

export const selectQuestions = (state: IGlobalStore) => state.questions.items;
