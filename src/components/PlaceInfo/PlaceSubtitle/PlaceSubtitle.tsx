import React, {ReactNode} from "react";
import { Popup } from "../../Popup";
import { usePopup } from "../../../hooks";
import { ArrowRightIcon } from "../../../assets/icons.tsx";
import './PlaceSubtitle.scss';

interface PlaceSubtitleProps {
    icon?: ReactNode
    subTitle: string
    popupTitle?: string
    btnText: string
    onClick?: () => void
    address?: string
    content?: ReactNode
}

export const PlaceSubtitle: React.FC<PlaceSubtitleProps> = ({
                                                                icon,
                                                                subTitle,
                                                                btnText,
                                                                popupTitle,
                                                                address,
                                                                content
                                                            }) => {
    const {isPopupOpen, handlePopupToggle, handleClosePopup} = usePopup();

    const handleCopyClick = () => {
        if (address) {
            navigator.clipboard.writeText(address);
        }
    };
    return (
        <div className='place__subtitle_container'>
            <div className='place__subtitle'>
                {icon && <div className='place__subtitle_icon'>{icon}</div>}
                <p className='place__subtitle_text'>{subTitle}</p>
            </div>
            {address ? (
                <a href="#" className="btn__popup" onClick={handleCopyClick}>{btnText}<span><ArrowRightIcon
                    fill="#e27976" width={10}/></span></a>

            ) : (
                <a href="#" className="btn__popup" onClick={handlePopupToggle}>{btnText}<span><ArrowRightIcon
                    fill="#e27976" width={10}/></span></a>
            )}

            {isPopupOpen && (
                <Popup title={popupTitle} content={content} onClose={handleClosePopup}/>
            )}
        </div>
    );
};

