import React from "react";
import { PlaceSubtitle } from "../PlaceSubtitle";
import { emojiMap } from "../../../mocks";
import './PlaceFeatures.scss';

interface PlaceFeaturesProps {
    categories: string[];
    countryCuisines: string[];
    features: string[];
}

export const PlaceFeatures: React.FC<PlaceFeaturesProps> = ({categories, features, countryCuisines}) => {
    const renderCategoryItems = (items: string[]) => {
        return items.map((item, index) => (
            <span key={index} className='place__features_category__item'>
            <span className="emoji">{emojiMap[item]}</span>
            <span className="text">{item}</span>
            </span>
        ));
    };

    return (
        <>
            <PlaceSubtitle
                subTitle="Details"
                btnText="More"
                popupTitle="Details"
                content={
                    <div className="place__features_categories">
                        <strong>Categories:</strong>{renderCategoryItems(categories)}
                        <strong>Country Cuisines:</strong>{renderCategoryItems(countryCuisines)}
                        <strong>Features:</strong>{renderCategoryItems(features)}
                    </div>
                }
            />
            <div className="place__features">
                <div className="place__features_category">
                    {renderCategoryItems(categories)}
                    {renderCategoryItems(features)}
                </div>
            </div>
        </>
    );
};
