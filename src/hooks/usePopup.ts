import { useState } from 'react';

export const usePopup = (initialState = false) => {
    const [isPopupOpen, setIsPopupOpen] = useState(initialState);

    const handlePopupToggle = () => {
        setIsPopupOpen(isPopupOpen => !isPopupOpen);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    return {
        isPopupOpen,
        handlePopupToggle,
        handleClosePopup,
    };
};
