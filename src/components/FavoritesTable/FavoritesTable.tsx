import React from "react";
import PlaceCard, { FoodEstablishmentDataProps } from "../PlaceCard/PlaceCard";
import useFavorites from '../../hooks/useFavorites';
import FavoritesImage from '../../assets/images/favoritePageImage.png';
import "./FavoritesTable.scss"

const FavouritesTable: React.FC = () => {
  const favourites = useFavorites();

  if (favourites.length === 0) 
    return (
      <div className="empty__table">
          <img src={FavoritesImage} alt="Favorite Page Image" />
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
