import React from "react";
import './PlacesTable.scss'
import PlaceCard, { FoodEstablishmentDataProps } from "../PlaceCard/PlaceCard";

interface PlacesTableProps {
  places: FoodEstablishmentDataProps[];
}

const PlacesTable: React.FC<PlacesTableProps> = ({ places = [] }) => {
  if (!places) return <div>Loading...</div>;
  return (
    <div>
      <div className="places__table">
        {places.map((item) => (
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

export default PlacesTable;
