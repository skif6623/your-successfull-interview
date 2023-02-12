import React, {FC} from "react";

import {useAppSelector} from "../../hooks/hooks";
import {selectQuestions} from "../../redux/selectors";

import {ETitle, EQuestItem, EQuestList, EQuestTitle, EQuestSubtitle} from "./QuestionsList.styled";

import {IQItem} from "../../types/types";

import {getCurrentColor} from "../../utils/functions";

interface IQuestionListProps {
	title?: string;
}

export const QuestionsList: FC<IQuestionListProps> = ({title}) => {
	const questions: IQItem[] = useAppSelector(selectQuestions);
	const html = questions.filter(el => el.category === "html");

	console.log("html", html);

	getCurrentColor(title);

	return (
		<>
			<ETitle>{title}</ETitle>
			<EQuestList>
				{questions.map(({id, question, answer}: IQItem) => {
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
