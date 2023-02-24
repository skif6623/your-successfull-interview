import React, { FC } from 'react';
import { useState } from 'react';
import { useAppSelector } from '../../hooks/hooks';
import { selectFilter } from '../../redux/selectors';
import { QuestionTitle } from '../QuestionTitle/QuestionTitle';
import {
  ETitle,
  EQuestItem,
  EQuestList,
  EQuestSubtitle,
} from './QuestionsList.styled';
import { IQItem, IQuestParams } from '../../types/componentTypes/types';

interface IQuestionListProps {
  title?: string;
  questParams: IQuestParams;
}

export const QuestionsList: FC<IQuestionListProps> = ({
  title,
  questParams,
}) => {
  const [activeAnswer, setActiveAnswer] = useState<string>('-1');
  const filter: string = useAppSelector(selectFilter);

  const getVisibleQuestions = () => {
    const normalizeFilter = filter.toLowerCase();

    return questParams.categoryItems.filter(item =>
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
              <QuestionTitle color={questParams.color}>
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
