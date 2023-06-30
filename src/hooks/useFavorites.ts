import { useEffect, useState } from "react";
import { FoodEstablishmentDataProps } from "../components/PlaceCard/PlaceCard";
import useData from './useData';

const useFavorites = (): FoodEstablishmentDataProps[] => {
  const [favourites, setFavourites] = useState<FoodEstablishmentDataProps[]>([]);
  const data = useData();

  const updateFavorites = () => {
    let favouriteIDs: number[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      if(key && key.startsWith('item-')) {
        let item = localStorage.getItem(key);
        if(item) {
          favouriteIDs.push(parseInt(item, 10));
        }
      }
    }

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
