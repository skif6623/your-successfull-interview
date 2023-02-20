import React, { FC } from 'react';
import { useState } from 'react';
import { useAppSelector } from '../../hooks/hooks';
import { selectQuestions, selectFilter } from '../../redux/selectors';
import { QuestionTitle } from '../QuestionTitle/QuestionTitle';
import {
  ETitle,
  EQuestItem,
  EQuestList,
  EQuestSubtitle,
} from './QuestionsList.styled';
import { IQItem } from '../../types/componentTypes/types';
import { getSortedQuestions } from '../../utils/functions';

interface IQuestionListProps {
  title?: string;
}

export const QuestionsList: FC<IQuestionListProps> = ({ title }) => {
  const [activeAnswer, setActiveAnswer] = useState<string>('-1');
  const questions: IQItem[] = useAppSelector(selectQuestions);
  const filter: string = useAppSelector(selectFilter);
  const sortedQuestions = getSortedQuestions(questions, title)!;

  const getVisibleQuestions = () => {
    const normalizeFilter = filter.toLowerCase();

    return sortedQuestions.categoryItems.filter(item =>
      item.question.toLowerCase().includes(normalizeFilter)
    );
  };

  const visibleQuestions = getVisibleQuestions();

  const toggleAnswer = (id: string): void => {
    if (id === activeAnswer) {
      setActiveAnswer('-1');
      return;
    }
    setActiveAnswer(id);
  };

  return (
    <>
      <ETitle>{title}</ETitle>
      <EQuestList>
        {visibleQuestions.map(({ id, question, answer }: IQItem) => {
          return (
            <EQuestItem key={id} onClick={() => toggleAnswer(id)}>
              <QuestionTitle color={sortedQuestions.color}>
                {question}
              </QuestionTitle>
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
