import {IQItem} from "../types/componentTypes/types";

export const getSortedQuestions = (questions: IQItem[], title?: string) => {
	switch (title) {
		case "html":
			return {
				categoryItems: questions.filter(item => item.category === title),
				color: "#f46a3b",
			};
		case "css":
			return {
				categoryItems: questions.filter(item => item.category === title),
				color: "#2196f3",
			};
		case "java-script":
			return {
				categoryItems: questions.filter(item => item.category === title),
				color: "#e6c830",
			};

		case "react":
			return {
				categoryItems: questions.filter(item => item.category === title),
				color: "#00d8ff",
			};

		default:
			return;
	}
};
