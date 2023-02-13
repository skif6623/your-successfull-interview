import React, {FC} from "react";

import {useAppSelector} from "../../hooks/hooks";
import {selectQuestions, selectFilter} from "../../redux/selectors";

import {ETitle, EQuestItem, EQuestList, EQuestTitle, EQuestSubtitle} from "./QuestionsList.styled";

import {IQItem} from "../../types/types";

import {getCurrentColor} from "../../utils/functions";

interface IQuestionListProps {
	title?: string;
}

export const QuestionsList: FC<IQuestionListProps> = ({title}) => {
	const questions: IQItem[] = useAppSelector(selectQuestions);
	const filter: string = useAppSelector(selectFilter);

	const getSortedQuestions = (questions: IQItem[]) => {
		switch (title) {
			case "html":
				return questions.filter(item => item.category === title);
			case "css":
				return questions.filter(item => item.category === title);
			case "java-script":
				return questions.filter(item => item.category === title);
			case "react":
				return questions.filter(item => item.category === title);
			default:
				return;
		}
	};

	const sortedContacts = getSortedQuestions(questions)!;

	const getVisibleQuestions = () => {
		const normalizeFilter = filter.toLowerCase();

		return sortedContacts.filter(item => item.question.toLowerCase().includes(normalizeFilter));
	};

	const visibleQuestions = getVisibleQuestions();

	getCurrentColor(title);

	return (
		<>
			<ETitle>{title}</ETitle>
			<EQuestList>
				{visibleQuestions.map(({id, question, answer}: IQItem) => {
					return (
						<EQuestItem key={id}>
							<EQuestTitle color={getCurrentColor(title)}>{question}</EQuestTitle>
							<EQuestSubtitle>{answer}</EQuestSubtitle>
						</EQuestItem>
					);
				})}
			</EQuestList>
		</>
	);
};
