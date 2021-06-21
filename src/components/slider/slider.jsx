import React, { useRef, useState } from 'react';
import desktop_slide_1 from '../../images/desktop_slide_1.jpg';
import desktop_slide_2 from '../../images/desktop_slide_2.jpg';
import desktop_slide_3 from '../../images/desktop_slide_3.jpg';
 

const Slider = () => {

    const itemsWidth = 600;
    const itemsCount = 3;
    const slideToShow = 1;
    const slideToScoll = 1;
    const movePosition = slideToShow * itemsWidth;

    const slider = useRef(null);
   
    const [prev, setPrev] = useState(true);
    const [next, setNext] = useState(false);

    let position = 0;

    const prevHandler = () => {
        const itemsLeft = Math.abs(position) / itemsWidth;

        position += itemsLeft >= slideToScoll ? movePosition : itemsLeft * itemsWidth;

        changePosition();
        checkButtons();
    }

    
    const nextHandler = () => {
        const itemsLeft = itemsCount - (Math.abs(position) + slideToShow * itemsWidth) / itemsWidth;

        position -= itemsLeft >= slideToScoll ? movePosition : itemsLeft * itemsWidth;

        changePosition();
        checkButtons();
    }

    const changePosition = () => {
        slider.current.childNodes.forEach((element) => {
            element.style= `transform: translateX(${position}px)`
        })

    }

    const checkButtons = () => {
        if (position === 0) {
            setPrev(true);
            setNext(false);

        } else {
            setPrev(false);
        }

        if (position <= -(itemsCount - slideToShow)*itemsWidth) {
            setNext(true);
            setPrev(false);
        }

    }

    return (
        <div className="slider">
            <div className="slider__track" ref={slider}>
                <div className="slider__item">
                    <picture>
                        <img className="slider__item-img" src={desktop_slide_1} alt="slider auto 1" width="600" height="375" />
                    </picture>
                </div>
                <div className="slider__item">
                    <picture>
                        <img className="slider__item-img" src={desktop_slide_2} alt="slider auto 2" width="600" height="375" />
                    </picture>
                </div>
                <div className="slider__item">
                    <picture>
                        <img className="slider__item-img" src={desktop_slide_3} alt="slider auto 3" width="600" height="375" />
                    </picture>
                </div>
            </div>

            <div className="slider__buttons">
                <button className="slider__buttons-prev" aria-label="Prev" onClick={prevHandler} disabled={prev}></button>
                    <div className="slider__preview-list">
                        <img className="slider__img-preview" src={desktop_slide_1} alt="slider auto 1" width="128" height="80" />
                        <img className="slider__img-preview" src={desktop_slide_2} alt="slider auto 2" width="128" height="80" />
                        <img className="slider__img-preview" src={desktop_slide_3} alt="slider auto 3" width="128" height="80" />
                    </div>
                <button className="slider__buttons-next" aria-label="Next" onClick={nextHandler} disabled={next}></button>
            </div>
        </div>
    )
};

export default Slider;