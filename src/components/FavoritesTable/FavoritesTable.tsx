import React from "react";
import { useHistory } from "react-router-dom";
import PlaceCard, { FoodEstablishmentDataProps } from "../PlaceCard/PlaceCard";
import useFavorites from '../../hooks/useFavorites';
import FavoritesImage from '../../assets/images/favoritePageImage.png';
import "./FavoritesTable.scss"

const FavouritesTable: React.FC = () => {
  const favourites = useFavorites();
  const history = useHistory();

  if (favourites.length === 0) 
    return (
      <div className="empty__table">
          <img src={FavoritesImage} alt="Favorite Page Image" className="empty__table__image" />
          <div className="empty__table__title">
            <p>You don't have any favorite restaurants yet</p>
          </div>
          <div className="empty__table__description">
            <p>For quick access to your favorite restaurants, press favorite on the restaurant you liked</p>
          </div>
          <button className="empty__table__button" onClick={() => history.push('/home')}>Look over</button>
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
