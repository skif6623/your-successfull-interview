import React from 'react';
import { useAppSelector } from '../hooks/hooks';
import { Box, Container } from '@mui/system';
import { QuestionTitle } from '../components/QuestionTitle/QuestionTitle';
import { AnswerTitle } from '../components/AnswerTitle/AnswerTitle';

// type Props = {};

export const RandomRepeatPage = () => {
  const questions = useAppSelector(state => state.questions.items);
  console.log(questions);

  return (
    <main style={{ marginTop: '80px' }}>
      <Container>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Box>
            <QuestionTitle color="blue">Питання</QuestionTitle>
            <AnswerTitle>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
              qui.
            </AnswerTitle>
          </Box>
          <Box>
            <Box display="flex" justifyContent="space-between">
              <button type="button">B</button>
              <button type="button">N</button>
              <button type="button">G</button>
            </Box>

            <button
              style={{
                display: 'block',
                margin: '0 auto',
              }}
              type="button"
            >
              Отримати питання
            </button>
          </Box>
        </Box>
      </Container>
    </main>
  );
};
