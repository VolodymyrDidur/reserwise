import React from "react";
import './DarkButton.scss'

interface DarkButtonProps {
    link: string
    text: string
}

export const DarkButton: React.FC<DarkButtonProps> = ({link, text}) => {
    return (
        <a href={link} className='dark__button'>{text}</a>
    );
};
