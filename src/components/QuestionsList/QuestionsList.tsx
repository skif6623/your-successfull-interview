import React, {FC} from "react";
import {useAppSelector} from "../../hooks/hooks";
import {selectQuestions, selectFilter} from "../../redux/selectors";
import {ETitle, EQuestItem, EQuestList, EQuestTitle, EQuestSubtitle} from "./QuestionsList.styled";
import {IQItem} from "../../types/componentTypes/types";
import {getCurrentColor} from "../../utils/functions";
import {useState} from "react";
interface IQuestionListProps {
	title?: string;
}

export const QuestionsList: FC<IQuestionListProps> = ({title}) => {
	const questions: IQItem[] = useAppSelector(selectQuestions);
	const filter: string = useAppSelector(selectFilter);

	const [activeAnswer, setActiveAnswer] = useState<string>("-1");

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

	const currentColor = getCurrentColor(title)!;

	const toggleAnswer = (id: string): any => {
		if (id === activeAnswer) {
			setActiveAnswer("-1");
			return;
		}
		setActiveAnswer(id);
	};

	return (
		<>
			<ETitle>{title}</ETitle>
			<EQuestList>
				{visibleQuestions.map(({id, question, answer}: IQItem) => {
					return (
						<EQuestItem key={id} onClick={() => toggleAnswer(id)}>
							<EQuestTitle color={currentColor}>{question}</EQuestTitle>
							<EQuestSubtitle id={id} active={activeAnswer}>
								{answer}
							</EQuestSubtitle>
						</EQuestItem>
					);
				})}
			</EQuestList>
		</>
	);
};
