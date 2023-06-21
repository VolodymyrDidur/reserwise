import { useParams } from 'react-router-dom'
import { PageHeader } from "../../components/PageHeader";
import { ImageSlider } from "../../components/ImageSlider";
import PlaceInfo from "../../components/PlaceInfo/PlaceInfo.tsx";
import { PlaceAddress } from "../../components/PlaceInfo/PlaceAddress";
import { foodEstablishmentData } from "../../mocks";
import './PlacePage.scss';


export const PlacePage = () => {
    const {id} = useParams<{ id: string }>();
    const place = foodEstablishmentData.find(item => item.id === parseInt(id));

    return (
        <>
            <PageHeader headerText={place.name || 'Place Name'}/>
            <div className="place-page">
                <div className="place__details">
                    <ImageSlider images={place.images || []}/>
                    <PlaceInfo/>
                </div>
                <PlaceAddress address={place.address}/>
            </div>
        </>
    );
};
