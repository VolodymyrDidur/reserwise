import React, { useEffect, useState } from "react";
import './PlaceCard.scss'
import { HeartIcon, LocationIcon, RedHeartIcon } from "../../assets/icons";
import { emojiMap } from "../../mocks";
import useUser from '../../hooks/useUser';

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
  const { user } = useUser();
  const [isFavourite, setIsFavourite] = useState<boolean>(false);

  const updateFavouriteStatus = (id: number) => {
    setIsFavourite(Boolean(localStorage.getItem(`item-${id}`)));
  };

  useEffect(() => {
    updateFavouriteStatus(item.id);

    const handleUpdateFavorites = () => updateFavouriteStatus(item.id);
    window.addEventListener('updateFavorites', handleUpdateFavorites);

    return () => {
      window.removeEventListener('updateFavorites', handleUpdateFavorites);
    }
  }, [item.id]);

  const onHeartClick = () => {
    if(user){
      if(isFavourite){
        localStorage.removeItem(`item-${item.id}`);
        setIsFavourite(false);
      } else {
        localStorage.setItem(`item-${item.id}`, item.id.toString());
        setIsFavourite(true);
      }
      
      window.dispatchEvent(new Event('updateFavorites'));
    }
  }

  return (
    <div key={item.id}>
      <div className="place__container">
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
      </div>
    </div>
  );
};

export default PlaceCard;
