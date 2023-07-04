import React from 'react';
import './FavoritesPage.scss';
import FavouritesTable from '../../components/FavoritesTable/FavoritesTable';
import { FavoritesPageHeader } from '../../components/FavoritesPageHeader/FavoritesPageHeader';

export const FavoritesPage: React.FC<{}> = ({ }) => {
    return (
      <div className='favorites__page'>
        <FavoritesPageHeader />
        <FavouritesTable />
      </div>
    );
  };