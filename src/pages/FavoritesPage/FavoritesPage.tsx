import React from 'react';
import './FavoritesPage.scss';
import FavouritesTable from '../../components/FavoritesTable/FavoritesTable';
import { PageHeader } from '../../components/PageHeader';
import { useTranslation } from 'react-i18next';

export const FavoritesPage: React.FC<{}> = ({ }) => {
    const { t } = useTranslation();
    return (
      <div className='favorites__page'>
        <PageHeader headerText={t('favorites')} />
        <FavouritesTable />
      </div>
    );
  };