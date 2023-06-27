import React from 'react';
import { categoryMocks } from '../../assets/mocks/categoryMocks';
import './Categories.scss';
import { useTranslation } from 'react-i18next';

export const Categories: React.FC<{}> = ({}) => {
  const { t } = useTranslation();
  return (
    <div className="categories-container">
      <div className="categories-scroll">
        {categoryMocks.map((category) => (
          <div className="category" key={category.id}>
            <img src={category.image} alt={category.name} className="category-image" />
            <div className="category-text">{t(`categoryList.${category.name}`)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};