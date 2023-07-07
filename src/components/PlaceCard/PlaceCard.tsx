import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import './PlaceCard.scss'
import { HeartIcon, LocationIcon, RedHeartIcon } from "../../assets/icons";
import { emojiMap } from "../../mocks";
import { useAuth } from '../../hooks/useAuth';

interface IDetailsInstitution {
  categories: string[];
  countryCuisines: string[];
  features: string[];
}

export interface FoodEstablishmentDataProps {
  id: number;
  name: string;
  description: string;
  images: string[];
  details: IDetailsInstitution;
}

interface PlaceCardProps {
  item: FoodEstablishmentDataProps;
  timeToLocation: string;
}

const PlaceCard: React.FC<PlaceCardProps> = ({ item, timeToLocation }) => {
  const { isAuthenticated } = useAuth();
  const [isFavourite, setIsFavourite] = useState<boolean>(false);

  const updateFavouriteStatus = (id: number) => {
    const favourites = JSON.parse(localStorage.getItem('favouritePlaces') || '[]');
    setIsFavourite(favourites.includes(id));
  };

  useEffect(() => {
    updateFavouriteStatus(item.id);

    const handleUpdateFavorites = () => updateFavouriteStatus(item.id);
    window.addEventListener('updateFavorites', handleUpdateFavorites);

    return () => {
      window.removeEventListener('updateFavorites', handleUpdateFavorites);
    }
  }, [item.id]);

  const onHeartClick = (e: React.MouseEvent) => {
    e.preventDefault()
    
    if(isAuthenticated){
      const favourites = JSON.parse(localStorage.getItem('favouritePlaces') || '[]');
      const index = favourites.indexOf(item.id);

      if(index !== -1){
        favourites.splice(index, 1);
      } else {
        favourites.push(item.id);
      }
  
      localStorage.setItem('favouritePlaces', JSON.stringify(favourites));
        
      window.dispatchEvent(new Event('updateFavorites'));
    }
  }

  return (
    <Link key={item.id} to={`/place/${item.id}`} className="place__container">
        <img className="place__photo" src={item.images[0]} alt={item.name} />
        <button className='background__heart' onClick={onHeartClick}>
          {isFavourite ? <RedHeartIcon /> : <HeartIcon />}
        </button>
        <div className="background__time">
          <LocationIcon width={20} height={20} />
          {timeToLocation}
        </div>
        <div className="background__type">
          {[
            ...item.details.categories,
            ...item.details.features,
          ].map((itemType: string) => (
            <span key={itemType} title={itemType}>
              {emojiMap[itemType]}
            </span>
          ))}
        </div>
        <p className="place__name">{item.name}</p>
        <p className="place__description">{item.description}</p>
    </Link>
  );
};

export default PlaceCard;
