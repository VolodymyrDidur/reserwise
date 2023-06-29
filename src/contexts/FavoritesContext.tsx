import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { FoodEstablishmentDataProps } from '../components/PlaceCard/PlaceCard';

interface FavouritesContextProps {
  favourites: FoodEstablishmentDataProps[];
  addFavourite: (item: FoodEstablishmentDataProps) => void;
  removeFavourite: (itemId: number) => void;
}

interface FavouritesProviderProps {
  children: ReactNode;
}

export const FavouritesContext = createContext<FavouritesContextProps>({
  favourites: [],
  addFavourite: () => {},
  removeFavourite: () => {}
});

export const FavouritesProvider: React.FC<FavouritesProviderProps> = ({ children }) => {
  const [favourites, setFavourites] = useState<FoodEstablishmentDataProps[]>([]);

  useEffect(() => {
    const favs = localStorage.getItem('favourites');
    if (favs) {
      setFavourites(JSON.parse(favs));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites));
  }, [favourites]);

  const addFavourite = (item: FoodEstablishmentDataProps) => {
    setFavourites(prevFavourites => [...prevFavourites, item]);
  };

  const removeFavourite = (itemId: number) => {
    setFavourites(prevFavourites => prevFavourites.filter(item => item.id !== itemId));
  };

  return (
    <FavouritesContext.Provider value={{ favourites, addFavourite, removeFavourite }}>
      {children}
    </FavouritesContext.Provider>
  );
};
