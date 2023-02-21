import React, { FC, useState } from 'react';
import { CategoryItem } from '../CategoryItem/CategoryItem';
import {
  EHtmlIcon,
  ECssIcon,
  EJsIcon,
  EReactIcon,
} from './CategoryList.styled';

const categoryIcons = [
  {
    icon: <EHtmlIcon />,
    id: 'html',
    color: '#f46a3b',
    image:
      'https://cdn.pixabay.com/photo/2017/03/27/21/38/sunset-2180346_960_720.jpg',
  },
  {
    icon: <ECssIcon />,
    id: 'css',
    color: '#2196f3',
    image:
      'https://cdn.pixabay.com/photo/2018/08/06/22/55/sun-3588618_960_720.jpg',
  },
  {
    icon: <EJsIcon />,
    id: 'java-script',
    color: '#e6c830',
    image:
      'https://cdn.pixabay.com/photo/2016/11/21/13/29/yellow-1845394_960_720.jpg',
  },
  {
    icon: <EReactIcon />,
    id: 'react',
    color: '#00d8ff',
    image:
      'https://cdn.pixabay.com/photo/2016/04/15/04/02/water-1330252_960_720.jpg',
  },
];

export const CategoryList: FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('java-script');

  const toggleCategory = (text: string): any => {
    // if (text === activeCategory) {
    //   setActiveCategory(text);
    //   return;
    // }
    setActiveCategory(text);
  };

  return (
    <div>
      <ul>
        {categoryIcons.map(({ icon, id, color, image }: any) => {
          return (
            <CategoryItem
              id={id}
              image={image}
              color={color}
              icon={icon}
              active={activeCategory}
              key={id}
              toggle={toggleCategory}
            >
              {id}
            </CategoryItem>
          );
        })}
      </ul>
    </div>
  );
};
