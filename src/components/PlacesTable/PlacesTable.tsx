import React from "react";
import './PlacesTable.scss'
import PlaceCard from "../PlaceCard/PlaceCard";
import { foodEstablishmentData } from "../../mocks/foodEstablishmentData";

const PlacesTable: React.FC = () => {
  return (
    <div className="places__table">
      {foodEstablishmentData.map((item) => (
          <PlaceCard
            item={item}
            timeToLocation="60min"
          />
        ))}
    </div>
  );
};

export default PlacesTable;
