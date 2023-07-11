import React from "react";
import { isPlaceOpen } from "../../../helpers/workSchedule.ts";
import { CircleIcon } from "../../../assets/icons.tsx";
import { PlaceSubtitle } from "../PlaceSubtitle";
import './PlaceWorkingHours.scss'
import { useTranslation } from "react-i18next";

interface PlaceWorkingHoursProps {
    workingHours: string;
}

const PlaceWorkingHours: React.FC<PlaceWorkingHoursProps> = ({workingHours}) => {
    const { t } = useTranslation();
    const isOpen = isPlaceOpen(workingHours);
    const statusColor = isOpen ? '#3da025' : '#e72c2c';
    const statusText = isOpen ? t('open') : t('closed');

    const workingHoursList = workingHours.split('\n').map((item, index) => (
        <li key={index}>{item}</li>
    ));

    return <PlaceSubtitle icon={<CircleIcon fill={statusColor}/>} subTitle={statusText} btnText={t('workSchedule')}
                          popupTitle={t('workSchedule')} content={<ul className='hours__list'>{workingHoursList}</ul>}/>
};

export default PlaceWorkingHours;
