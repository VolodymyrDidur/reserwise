import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Categories.scss';
import { categoryMocks, Category } from '../../assets/mocks/categoryMocks';

interface CategoriesProps {
  handleCategoryFilter: (selectedCategories: string[]) => void;
}

export const Categories: React.FC<CategoriesProps> = ({ handleCategoryFilter }) => {
  const { t } = useTranslation();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleCategoryClick = (category: string) => {
    let updatedCategories;

    if (selectedCategories.includes(category)) {
      updatedCategories = selectedCategories.filter((selectedCategory) => selectedCategory !== category);
    } else {
      updatedCategories = [...selectedCategories, category];
    }

    setSelectedCategories(updatedCategories);
    handleCategoryFilter(updatedCategories);
  };

  return (
    <div className="categories-container">
      <div className="categories-scroll">
        {categoryMocks.map((category: Category) => {
          const isCategorySelected = selectedCategories.includes(category.name);
          const categoryClass = isCategorySelected ? 'selected' : '';

          return (
            <div
              key={category.id}
              className={`category ${categoryClass}`}
              onClick={() => handleCategoryClick(category.name)}
            >
              <img 
                src={category.image} 
                alt={category.name} 
                className="category-image" 
              />
              <div className="category-text">{t(`categoryList.${category.name}`)}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
