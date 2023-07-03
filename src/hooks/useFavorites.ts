import { useEffect, useState } from "react";
import { FoodEstablishmentDataProps } from "../components/PlaceCard/PlaceCard";
import useFoodEstablishmentData from './useFoodEstablishmentData';

const useFavorites = (): FoodEstablishmentDataProps[] => {
  const [favourites, setFavourites] = useState<FoodEstablishmentDataProps[]>([]);
  const data = useFoodEstablishmentData();

  const updateFavorites = () => {
    const favouriteIDs = JSON.parse(localStorage.getItem('favouritePlaces') || '[]');
  
    let newFavourites: FoodEstablishmentDataProps[] = [];
    for (let id of favouriteIDs) {
      let place = data.find(place => place.id === id);
      if (place) {
        newFavourites.push(place);
      }
    }
  
    setFavourites(newFavourites);
  };

  useEffect(() => {
    updateFavorites();
    window.addEventListener('updateFavorites', updateFavorites);

    return () => {
      window.removeEventListener('updateFavorites', updateFavorites);
    }
  }, [data]);

  return favourites;
};

export default useFavorites;
