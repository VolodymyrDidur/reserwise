import React from "react";
import { PlaceSubtitle } from "../PlaceSubtitle";
import { emojiMap } from "../../../mocks";
import './PlaceFeatures.scss';
import { useTranslation } from "react-i18next";

interface PlaceFeaturesProps {
    categories: string[];
    countryCuisines: string[];
    features: string[];
}

export const PlaceFeatures: React.FC<PlaceFeaturesProps> = ({categories, features, countryCuisines}) => {
    const { t } = useTranslation();

    const renderCategoryItems = (items: string[]) => {
        return items.map((item, index) => (
            <span key={index} className='place__features_category__item'>
            <span className="emoji">{emojiMap[item]}</span>
            <span className="text">{t(`detailsList.${item}`)}</span>
            </span>
        ));
    };

    return (
        <>
            <PlaceSubtitle
                subTitle={t("details")}
                btnText={t("more")}
                popupTitle={t("details")}
                content={
                    <div className="place__features_categories">
                        <strong>{`${t('categories')}:`}</strong>{renderCategoryItems(categories)}
                        <strong>{`${t('cuisines')}:`}</strong>{renderCategoryItems(countryCuisines)}
                        <strong>{`${t('features')}:`}</strong>{renderCategoryItems(features)}
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
