import styled from '@emotion/styled';

interface IQuestTitleProps {
  marginValue?: string;
  color: string;
}

export const EQuestTitle = styled.h3`
  margin-bottom: ${({ marginValue }: IQuestTitleProps) =>
    marginValue ? marginValue : 'none'};
  padding: 10px;
  color: #ffffff;
  background-color: ${({ color }) => (color ? color : '#000000')};
  border-radius: 10px;
`;
