import React, { FC, useState } from 'react';

import {
  ECategoryItem,
  ECategoryTitle,
  ETitleOverlay,
  ETitleWrap,
  EIconWrap,
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
  const [activeCategory, setActiveCategory] = useState<string>('java-script');

  const toggleCatery = (text: string): any => {
    if (text === activeCategory) {
      setActiveCategory('-1');
      return;
    }
    setActiveCategory(text);
  };

  const active = id === activeCategory;

  return (
    <ECategoryItem
      active={active}
      image={image}
      onClick={() => toggleCatery(id)}
    >
      <ETitleWrap>
        <ETitleOverlay>
          <ECategoryTitle color={color}>{children}</ECategoryTitle>
        </ETitleOverlay>
      </ETitleWrap>
      <EIconWrap active={active}>{icon}</EIconWrap>
    </ECategoryItem>
  );
};
