import { useEffect, useState } from "react";
import { foodEstablishmentData } from '../mocks/foodEstablishmentData';
import { FoodEstablishmentDataProps } from "../components/PlaceCard/PlaceCard";

const useFoodEstablishmentData = () => {
  const [data, setData] = useState<FoodEstablishmentDataProps[]>([]);

  useEffect(() => {
    setData(foodEstablishmentData);
  }, []);

  return data;
};

export default useFoodEstablishmentData;
