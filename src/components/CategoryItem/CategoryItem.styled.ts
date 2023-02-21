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
  overflow: hidden;
`;

export const ETitleWrap = styled.div`
  opacity: ${({ active }: EProps) => (active ? '0' : '1')};
  pointer-events: ${({ active }) => (active ? 'none' : 'auto')};
  height: 100%;
  transition: opacity 500ms ease;
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
  position: absolute;
  top: ${({ active }: EProps) => (active ? '20%' : '20%')};
  right: ${({ active }: EProps) => (active ? '50%' : '0')};
  transform: ${({ active }: EProps) =>
    active ? 'translate(50%, 0)' : 'translate(50%, 0)'};

  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 180px;

  color: ${({ color }) => (color ? color : '#000000')};
  background: #ffffff;
  border-radius: 50%;
  opacity: ${({ active }: EProps) => (active ? '1' : '0')};
  pointer-events: ${({ active }) => (active ? 'auto' : 'none')};
  transition: all 500ms ease 250ms;
`;

export const ECategoryBtn = styled.button`
  position: absolute;
  top: ${({ active }: EProps) => (active ? '70%' : '70%')};
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
  font-size: 16px;
  line-height: 1.3;
  color: #ffffff;

  background: rgba(233, 233, 233, 0.4);
  backdrop-filter: blur(10px);
  border: ${({ color }) => (color ? `2px solid ${color}` : '2px solid black')};
  border-radius: 4px;
  opacity: ${({ active }: EProps) => (active ? '1' : '0')};
  pointer-events: ${({ active }) => (active ? 'auto' : 'none')};
  transition: top 500ms ease 250ms, left 500ms ease 250ms,
    transform 500ms ease 250ms, opacity 500ms ease 250ms, box-shadow 250ms ease;

  :hover {
    -webkit-box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.75);
  }
`;
