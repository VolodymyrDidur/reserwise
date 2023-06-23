import React from "react";
import './LightButton.scss'

interface LightButtonProps {
    link: string
    text: string
}

export const LightButton: React.FC<LightButtonProps> = ({link, text}) => {
    return (
        <a href={link} className='light__button'>{text}</a>
    );
};
