import React from "react";
import './PlaceCard.scss'
import { HeartIcon, LocationIcon } from "../../assets/icons";
import { emojiMap } from "../../mocks";

interface IDetailsInstitution {
  categories: string[];
  countryCuisines: string[];
  features: string[];
}

interface FoodEstablishmentDataProps {
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

  return (
    <td key={item.id}>
      <div className="place__container">
        <img className="place__photo" src={item.images[0]} alt={item.name} />
        <div className="background__heart">
          <HeartIcon />
        </div>
        <div className="background__time">
          <LocationIcon width={20} height={20} />
          <p>{timeToLocation}</p>
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
    </td>
  );
};

export default PlaceCard;
