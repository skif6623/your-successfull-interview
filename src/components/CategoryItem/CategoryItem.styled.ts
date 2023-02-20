import styled from '@emotion/styled';

interface EProps {
  image?: string;
  active?: string;
  id?: string;
  color?: string;
}

export const ECategoryItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${({ active, id }: EProps) =>
    active === id ? 'calc(100vh - 326px)' : '90px'};
  padding: 15px;
  background-image: url(${({ image }: EProps) => (image ? image : 'none')});
  transition: height 500ms ease, background-color 5000ms ease;
  cursor: pointer;
`;

export const ETitleWrap = styled.div`
  height: 100%;
`;

export const ETitleOverlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 15px;
  background-color: white;
  border-radius: 20px;
  height: 30px;
`;

export const ECategoryTitle = styled.h3`
  text-transform: uppercase;
  color: ${({ color }: EProps) => (color ? color : 'black')};
`;
