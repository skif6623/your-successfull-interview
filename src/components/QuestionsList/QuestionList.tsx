import React, {FC} from "react";
import {useAppSelector} from "../../hooks/hooks";
import {selectQuestions} from "../../redux/selectors";
import {IQItem} from "../../types/types";

interface IQuestionListProps {
	title: string;
}

export const QuestionList: FC<IQuestionListProps> = ({title}) => {
	const questions = useAppSelector(state => state.questions.items);

	return (
		<>
			<h2>{title}</h2>
			<ol style={{listStyle: "-moz-initial", overflowX: "scroll", outline: "2px solid red", maxHeight: "600px"}}>
				{questions.map((el: IQItem) => {
					return (
						<li key={el.id}>
							<h3>{el.question}</h3>
						</li>
					);
				})}
			</ol>
		</>
	);
};
