import React from 'react';
import { categoryMocks } from '../../assets/mocks/categoryMocks';
import './Categories.scss';

export const Categories: React.FC<{}> = ({}) => {
  return (
    <div className="categories-container">
      <div className="categories-scroll">
        {categoryMocks.map((category) => (
          <div className="category" key={category.id}>
            <img src={category.image} alt={category.name} className="category-image" />
            <div className="category-text">{category.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};