import React, { useContext } from "react";
import PlaceCard, { FoodEstablishmentDataProps } from "../PlaceCard/PlaceCard";
import { FavouritesContext } from "../../contexts/FavoritesContext";
import FavoritesImage from '../../assets/images/favoritePageImage.png';
import "./FavoritesTable.scss"

const FavouritesTable: React.FC = () => {
  const { favourites } = useContext(FavouritesContext);

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