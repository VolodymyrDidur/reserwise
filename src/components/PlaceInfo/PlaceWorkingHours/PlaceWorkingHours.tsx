import React from "react";
import { isPlaceOpen } from "../../../helpers/workSchedule.ts";
import { CircleIcon } from "../../../assets/icons.tsx";
import { PlaceSubtitle } from "../PlaceSubtitle";
import './PlaceWorkingHours.scss'

interface PlaceWorkingHoursProps {
    workingHours: string;
}

const PlaceWorkingHours: React.FC<PlaceWorkingHoursProps> = ({workingHours}) => {
    const isOpen = isPlaceOpen(workingHours);
    const statusColor = isOpen ? '#3da025' : '#e72c2c';
    const statusText = isOpen ? 'Open' : 'Closed';

    const workingHoursList = workingHours.split('\n').map((item, index) => (
        <li key={index}>{item}</li>
    ));

    return <PlaceSubtitle icon={<CircleIcon fill={statusColor}/>} subTitle={statusText} btnText='Work schedule'
                          popupTitle='Work schedule' content={<ul className='hours__list'>{workingHoursList}</ul>}/>
};

export default PlaceWorkingHours;
