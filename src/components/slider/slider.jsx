import React, {useRef} from 'react';
import desktop_slide_1 from '../../images/desktop_slide_1.jpg';
import desktop_slide_2 from '../../images/desktop_slide_2.jpg';
import desktop_slide_3 from '../../images/desktop_slide_3.jpg';

import SliderHoc from '../../hoc/slider-hoc';

const ITEMS_WIDTH = 600;
const ITEMS_COUNT = 3;
const SLIDE_TO_SHOW = 1;
const SLIDE_TO_SCROLL = 1;

let position = 0;

const movePosition = SLIDE_TO_SHOW * ITEMS_WIDTH;

const Slider = ({...props}) => {
    
    const slider = useRef(null);

    const onButtonPrevClick = () => {
        const itemsLeft = Math.abs(position) / ITEMS_WIDTH;

        position += itemsLeft >= SLIDE_TO_SCROLL ? movePosition : itemsLeft * ITEMS_WIDTH;

        changePosition();
        checkButtons();
    }
    
    const onButtonNextClick = () => {
        const itemsLeft = ITEMS_COUNT - (Math.abs(position) + SLIDE_TO_SHOW * ITEMS_WIDTH) / ITEMS_WIDTH;

        position -= itemsLeft >= SLIDE_TO_SCROLL ? movePosition : itemsLeft * ITEMS_WIDTH;

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
            props.onSetPrev(true);
            props.onSetNext(false);

        } else {
            props.onSetPrev(false);
        }

        if (position <= -(ITEMS_COUNT - SLIDE_TO_SHOW)*ITEMS_WIDTH) {
            props.onSetNext(true);
            props.onSetPrev(false);
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
                <button className="slider__buttons-prev" aria-label="Prev" onClick={onButtonPrevClick} disabled={props.prev}></button>
                    <div className="slider__preview-list">
                        <img className="slider__img-preview" src={desktop_slide_1} alt="slider auto 1" width="128" height="80" />
                        <img className="slider__img-preview" src={desktop_slide_2} alt="slider auto 2" width="128" height="80" />
                        <img className="slider__img-preview" src={desktop_slide_3} alt="slider auto 3" width="128" height="80" />
                    </div>
                <button className="slider__buttons-next" aria-label="Next" onClick={onButtonNextClick} disabled={props.next}></button>
            </div>
        </div>
    )
};

export default SliderHoc(Slider);