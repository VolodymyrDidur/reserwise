import React from "react";
import { DivIcon } from 'leaflet';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { useSearchLocation } from "../../../hooks";
import { PlaceSubtitle } from "../PlaceSubtitle";
import Spinner from "../../Spinner";
import { LocationIcon } from "../../../assets/icons.tsx";
import { renderToString } from "react-dom/server";
import 'leaflet/dist/leaflet.css';
import './PlaceAddress.scss';
import { useTranslation } from "react-i18next";

interface PlaceAddressProps {
    address: string
}

export const PlaceAddress: React.FC<PlaceAddressProps> = ({address}) => {
    const {location, isLoading} = useSearchLocation(address);
    const {t} = useTranslation();

    const iconHtml = renderToString(<LocationIcon/>);
    const customIcon = new DivIcon({
        className: 'custom-icon',
        html: iconHtml,
        iconSize: [32, 32],
    });

    return (
        <>
            <PlaceSubtitle subTitle={t("address")} btnText={t("copy")} address={address}/>
            <div className='map__wrapper'>
                {isLoading ? (
                    <Spinner/>
                ) : (
                    location && (
                        <MapContainer className='map' center={location} zoom={10}
                                      zoomControl={false} attributionControl={false}>
                            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                            <Marker position={location} icon={customIcon}/>
                        </MapContainer>
                    )
                )}
            </div>
        </>
    );
};
