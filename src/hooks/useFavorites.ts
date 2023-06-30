import { useState, useEffect } from 'react';
import { FoodEstablishmentDataProps } from "../components/PlaceCard/PlaceCard";

const useFavorites = (): FoodEstablishmentDataProps[] => {
  const [favourites, setFavourites] = useState<FoodEstablishmentDataProps[]>([]);

  useEffect(() => {
    const updateFavorites = () => {
      let newFavourites: FoodEstablishmentDataProps[] = [];
      for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        if(key && key.startsWith('item-')) {
          let item = localStorage.getItem(key);
          if(item) {
            newFavourites.push(JSON.parse(item));
          }
        }
      }
      setFavourites(newFavourites);
    };
    updateFavorites();

    window.addEventListener('updateFavorites', updateFavorites);

    return () => {
      window.removeEventListener('updateFavorites', updateFavorites);
    }
  }, []);

  return favourites;
};

export default useFavorites;
