import styled from '@emotion/styled';
import { ISubtitle } from '../../types/emotionTypes/types';

export const ETitle = styled.h3`
  margin-bottom: 25px;
  font-size: 50px;
  text-align: center;
  text-transform: uppercase;
`;

export const EQuestList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const EQuestItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const EQuestSubtitle = styled.p`
  display: ${({ id, active }: ISubtitle) => (id === active ? 'block' : 'none')};
  padding: 10px;
  font-size: 18px;
  font-weight: 400;
  border: ${({ color }) =>
    color ? `2px solid ${color}` : '2px solid #000000'};
  border-radius: 10px;
`;
