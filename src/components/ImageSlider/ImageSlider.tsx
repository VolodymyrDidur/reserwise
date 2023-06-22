import React, { useState } from "react";
import { NextIcon, PreviousIcon } from "../../assets/icons.tsx";
import './ImageSlider.scss';

interface ImageSliderProps {
    images: string[]
}

export const ImageSlider: React.FC<ImageSliderProps> = ({images}) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const handleNext = () => {
        const nextIndex = (currentIndex + 1) % images.length;
        setCurrentIndex(nextIndex);
    };
    const handlePrevious = () => {
        const previousIndex = (currentIndex - 1 + images.length) % images.length;
        setCurrentIndex(previousIndex);
    };
    const handleSlideClick = (index) => {
        setCurrentIndex(index);
    };
    return (
        <div className="slider">
            <img src={images[currentIndex]} alt="Photo of the institution" className="slider__image"/>
            <div className="slider__controls">
                <button onClick={handlePrevious} className="slider__controls_btnPrev">
                    <PreviousIcon/>
                </button>
                <button onClick={handleNext} className="slider__controls_btnNext">
                    <NextIcon/>
                </button>
            </div>
            <div className="slider__indicators">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`slider__indicators_item ${index === currentIndex ? 'slider__indicators_active' : ''}`}
                        onClick={() => handleSlideClick(index)}
                    />
                ))}
            </div>
        </div>
    );
};
