import React from 'react';
import { HomePageHeader } from '../../components/HomePageHeader/HomePageHeader';
import { Categories } from '../../components/Categories/Categories';
import './HomePage.scss';
import { useTranslation } from 'react-i18next';

export const HomePage: React.FC<{}> = ({ }) => {
  const { t } = useTranslation();
    return (
      <div className='home-page'>
        <HomePageHeader/>
        <main className="main">
          <div className="categories">
            <h2 className='categories__name'>{t('categories')}</h2>
            <Categories/>
          </div>
        </main>
      </div>
    );
  };