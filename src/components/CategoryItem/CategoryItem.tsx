import React, { FC, useState } from 'react';

import {
  ECategoryItem,
  ECategoryTitle,
  ETitleOverlay,
  ETitleWrap,
} from './CategoryItem.styled';

interface ICategoryItemsProps {
  children: string;
  icon: React.ReactNode;
  color: string;
  image: string;
  id: string;
}

export const CategoryItem: FC<ICategoryItemsProps> = ({
  children,
  icon,
  color,
  image,
  id,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('-1');

  const toggleCatery = (text: string): void => {
    if (text === activeCategory) {
      setActiveCategory('-1');
      return;
    }
    setActiveCategory(text);
  };

  return (
    <ECategoryItem
      id={id}
      active={activeCategory}
      image={image}
      onClick={() => toggleCatery(id)}
    >
      <ETitleWrap>
        <ETitleOverlay>
          <ECategoryTitle color={color}>{children}</ECategoryTitle>
        </ETitleOverlay>
      </ETitleWrap>
      {icon}
    </ECategoryItem>
  );
};
