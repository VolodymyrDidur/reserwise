import React from "react";
import { CloseIcon } from "../../assets/icons.tsx";
import './Popup.scss'

interface PopupProps {
    title: string
    content: React.ReactNode
    onClose?: () => void
}

export const Popup: React.FC<PopupProps> = ({title, content, onClose}) => {
    return (
        <div className="popup__overlay">
            <div className='popup__wrapper'>
                <div className="popup__header">
                    <h2 className="popup__header_title">{title}</h2>
                    <button className="popup__header_btnClose" onClick={onClose}>
                        <CloseIcon fill='#e27976' width={15} height={15}/>
                    </button>
                </div>
                <div className="popup__body">
                    {content}
                </div>
            </div>
        </div>
    );
};
