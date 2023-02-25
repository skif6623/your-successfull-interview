import { Accordion } from '@mui/material';
import styled from '@emotion/styled';

export const EAccordion = styled(Accordion)`
  transition: border-bottom 500ms ease;
  :hover {
    border-bottom: 5px solid black;
  }
`;
