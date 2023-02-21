import styled from '@emotion/styled';

interface EProps {
  image?: string;
  active?: boolean;
  color?: string;
  id?: string;
}

export const ECategoryItem = styled.li`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${({ active }: EProps) => (active ? 'calc(100vh - 326px)' : '90px')};
  padding: 15px;
  background-image: url(${({ image }: EProps) => (image ? image : 'none')});
  transition: all 500ms ease;
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

export const EIconWrap = styled.div`
  /* position: ${({ active }: EProps) => (active ? 'absolute' : 'reletive')};
  top: ${({ active }: EProps) => (active ? '50%' : '0')};
  right: ${({ active }: EProps) => (active ? '50%' : '0')};
  transform: ${({ active }: EProps) =>
    active ? 'translate(50%, -50%)' : 'translate(0, 0)'};
  transition: top 1000ms ease, right 1000ms ease, tranform 1000ms ease 5000ms; */
`;

export const ECategoryBtn = styled.button`
  position: absolute;
  top: ${({ active }: EProps) => (active ? '50%' : '50%')};
  left: ${({ active }: EProps) => (active ? '50%' : '0')};
  transform: ${({ active }: EProps) =>
    active ? 'translate(-50%, 0)' : 'translate(-50%, -50%)'};

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 43px;

  text-transform: uppercase;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.3;
  color: #ffffff;

  background: rgba(233, 233, 233, 0.4);
  border: ${({ color }) => (color ? `2px solid ${color}` : '2px solid black')};
  backdrop-filter: blur(10px);
  border-radius: 4px;
  opacity: ${({ active }: EProps) => (active ? '1' : '0')};
  transition: all 500ms ease 250ms;
  pointer-events: ${({ active }) => (active ? 'auto' : 'none')};
`;
