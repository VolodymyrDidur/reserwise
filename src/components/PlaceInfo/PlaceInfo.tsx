import { useParams } from 'react-router-dom';
import PlaceWorkingHours from "./PlaceWorkingHours/PlaceWorkingHours.tsx";
import { PlaceFeatures } from "./PlaceFeatures";
import { DarkButton } from "../Buttons/DarkButton";
import { LightButton } from "../Buttons/LightButton";
import { foodEstablishmentData } from "../../mocks";
import './PlaceInfo.scss';
import { useTranslation } from 'react-i18next';

const PlaceInfo = () => {
    const {id} = useParams<{ id: string }>();
    const {t} = useTranslation();

    const place = foodEstablishmentData.find(item => item.id === parseInt(id));
    return (
        <div className='place__info'>
            <PlaceWorkingHours workingHours={place.workingHours}/>
            <p className='place__info_description'>{place.description}</p>
            <PlaceFeatures categories={place.details.categories}
                           features={place.details.features}
                           countryCuisines={place.details.countryCuisines}/>
            <div className='place__info_btns'>
                <LightButton text={t('menu')} link='#ComingSoon'/>
                <DarkButton text={t('call')} link={`tel:${place.phoneNumber}`}/>
            </div>
        </div>
    );
};

export default PlaceInfo;