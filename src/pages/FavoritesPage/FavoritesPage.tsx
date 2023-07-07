import React from 'react';
import './FavoritesPage.scss';
import FavouritesTable from '../../components/FavoritesTable/FavoritesTable';
import { PageHeader } from '../../components/PageHeader';

export const FavoritesPage: React.FC<{}> = ({ }) => {
    return (
      <div className='favorites__page'>
        <PageHeader headerText='Favorites' />
        <FavouritesTable />
      </div>
    );
  };