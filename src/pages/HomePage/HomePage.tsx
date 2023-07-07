import React, { useState } from 'react';
import { HomePageHeader } from '../../components/HomePageHeader/HomePageHeader';
import { Categories } from '../../components/Categories/Categories';
import { useTranslation } from 'react-i18next';
import './HomePage.scss';
import { FoodEstablishmentDataProps } from '../../components/PlaceCard/PlaceCard';
import { foodEstablishmentData } from '../../mocks/foodEstablishmentData';
import PlacesTable from '../../components/PlacesTable/PlacesTable';

export const HomePage: React.FC = () => {
  const { t } = useTranslation();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  const handleCategoryFilter = (selectedCategories: string[]) => {
    setSelectedCategories(selectedCategories);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const displayedItems: FoodEstablishmentDataProps[] = foodEstablishmentData.filter((item) => {
    const hasSelectedCategory = selectedCategories.length === 0 || selectedCategories.every(category => item.details.categories.includes(category));
    const matchesSearchQuery = searchQuery === '' || item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return hasSelectedCategory && matchesSearchQuery;
  });

  return (
    <div className='home-page'>
      <HomePageHeader onSearch={handleSearch}/>
      <main className="main">
        <div className="categories">
          <h2 className='categories__name'>{t('categories')}</h2>
          <Categories handleCategoryFilter={handleCategoryFilter} />
        </div>
        <div className="popular__places">
          <h2 className='popular_places'>{t('popularplaces')}</h2>
          <PlacesTable places={displayedItems}/>
        </div>
      </main>
    </div>
  );
};
