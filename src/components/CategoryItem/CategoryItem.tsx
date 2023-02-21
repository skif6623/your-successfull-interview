import React, { FC } from 'react';

import {
  ECategoryItem,
  ECategoryTitle,
  ETitleOverlay,
  ETitleWrap,
  EIconWrap,
  ECategoryBtn,
} from './CategoryItem.styled';

interface ICategoryItemsProps {
  children: string;
  icon: React.ReactNode;
  color: string;
  image: string;
  id: string;
  active: string;
  toggle: any;
}

export const CategoryItem: FC<ICategoryItemsProps> = ({
  children,
  icon,
  color,
  image,
  id,
  active,
  toggle,
}) => {
  const activeItem = id === active;

  return (
    <ECategoryItem active={activeItem} image={image} onClick={() => toggle(id)}>
      <ETitleWrap>
        <ETitleOverlay>
          <ECategoryTitle color={color}>{children}</ECategoryTitle>
        </ETitleOverlay>
      </ETitleWrap>
      <EIconWrap active={activeItem}>{icon}</EIconWrap>
      <ECategoryBtn active={activeItem} color={color}>
        {id}
      </ECategoryBtn>
    </ECategoryItem>
  );
};
