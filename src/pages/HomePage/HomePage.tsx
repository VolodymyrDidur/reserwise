import React from 'react';
import { HomePageHeader } from '../../components/HomePageHeader/HomePageHeader';
import { Categories } from '../../components/Categories/Categories';
import './HomePage.scss';

export const HomePage: React.FC<{}> = ({ }) => {
    return (
      <div className='home-page'>
        <HomePageHeader/>
        <main className="main">
          <div className="categories">
            <h2 className='categories__name'>Categories</h2>
            <Categories/>
          </div>
        </main>
      </div>
    );
  };