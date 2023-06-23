import React, { useState, useEffect } from "react";
import "./PlacesTable.scss";
import { foodEstablishmentData, emojiMap } from "../../mocks";
import { HeartIcon, LocationIcon } from "../../assets/icons";

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

const Table: React.FC = () => {
  const [itemsPerRow, setItemsPerRow] = useState(4);
  const rows = Math.ceil(foodEstablishmentData.length / itemsPerRow);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;

      if (windowWidth >= 1920) {
        setItemsPerRow(4);
      } else if (windowWidth >= 1440 && windowWidth < 1920) {
        setItemsPerRow(3);
      } else if (windowWidth >= 768 && windowWidth < 1440) {
        setItemsPerRow(2);
      } else if (windowWidth >= 425 && windowWidth < 768) {
        setItemsPerRow(1);
      }
    };
    
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const timeToLocation = "60min";

  const tableRows: JSX.Element[] = [];

  for (let i = 0; i < rows; i++) {
    const startIndex = i * itemsPerRow;
    const endIndex = startIndex + itemsPerRow;
    const rowData: FoodEstablishmentDataProps[] = foodEstablishmentData.slice(startIndex, endIndex);

    const tableCells = rowData.map((item: FoodEstablishmentDataProps) => (
      <td key={item.id}>
        <div className="place__container">
          <img className="place__photo" src={item.images[0]} />
          <div className="background__heart">
            <HeartIcon />
          </div>
          <div className="background__time">
            <LocationIcon />
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
    ));

    tableRows.push(<tr key={i}>{tableCells}</tr>);
  }

  return (
    <table className="table">
      <tbody>{tableRows}</tbody>
    </table>
  );
};

export default Table;
