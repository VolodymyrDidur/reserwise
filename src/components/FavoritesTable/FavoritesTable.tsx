import React from "react";
import { useHistory } from "react-router-dom";
import PlaceCard, { FoodEstablishmentDataProps } from "../PlaceCard/PlaceCard";
import useFavorites from '../../hooks/useFavorites';
import FavoritesImage from '../../assets/images/favoritePageImage.png';
import "./FavoritesTable.scss"
import { useTranslation } from "react-i18next";

const FavouritesTable: React.FC = () => {
  const favourites = useFavorites();
  const history = useHistory();
  const { t } = useTranslation();

  if (favourites.length === 0) 
    return (
      <div className="empty__table">
          <img src={FavoritesImage} alt="Favorite Page Image" className="empty__table__image" />
          <div className="empty__table__title">
            <p>{t('noFavorites')}</p>
          </div>
          <div className="empty__table__description">
            <p>{t('hintFavorites')}</p>
          </div>
          <button className="empty__table__button" onClick={() => history.push('/home')}>{t('lookOver')}</button>
      </div>
    );
    
  return (
    <div>
      <div className="favorites__table">
        {favourites.map((item: FoodEstablishmentDataProps) => (
          <PlaceCard
            key={item.id}
            item={item}
            timeToLocation="60min"
          />
        ))}
      </div>
    </div>
  );
};

export default FavouritesTable;
