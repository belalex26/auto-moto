import React from 'react';
import desktop_slide_1 from '../../images/desktop_slide_1.jpg';
import desktop_slide_2 from '../../images/desktop_slide_2.jpg';
import desktop_slide_3 from '../../images/desktop_slide_3.jpg';


const Slider = () => {
    let position = 0;
    const sliderToShow = 1;
    const sliderToScroll = 1;
    const container = document.querySelector('.slider');
    const track = document.querySelector('.slider__track');
    const items = document.querySelectorAll('.slider__item');
    const btnPrev = document.querySelector('.slider__buttons-prev');
    const btnNext = document.querySelector('.slider__buttons-next');
    const itemsCount = items.length;
    const itemWidth = 600 / sliderToShow;
    const moviePosition = sliderToScroll * itemWidth;

    items.forEach((item) => {
        item.style.minWidth = `${itemWidth}px`;

    });
    

    const handlerBtnNext = () => {
        const itemsLeft = itemsCount - (Math.abs(position) + sliderToShow * itemWidth) / itemWidth;

        position -= itemsLeft >= sliderToScroll ? moviePosition : itemsLeft * itemWidth;

        setPosition();
        //checkButtons();
    };

    const handlerBtnPrev = () => {
        const itemsLeft = Math.abs(position) / itemWidth;

        position += itemsLeft >= sliderToScroll ? moviePosition : itemsLeft * itemWidth;

        setPosition();
        //checkButtons();
    };

    const setPosition = () => {
        track.getElementsByClassName.transform = `translateX(${position}px)`;
    }

    /*
    const checkButtons = () => {
        btnPrev.disabled = position === 0;
        btnNext.disabled = position <= -(itemsCount - sliderToShow) * itemWidth;
    };*/

    //checkButtons();

    return (
        <div className="slider">
            <div className="slider__track">
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
                <button className="slider__buttons-prev" onClick={handlerBtnPrev}>Prev</button>
                    <div className="slider__preview-list">
                        <img className="slider__img-preview" src={desktop_slide_1} alt="slider auto 1" width="128" height="80" />
                        <img className="slider__img-preview" src={desktop_slide_2} alt="slider auto 2" width="128" height="80" />
                        <img className="slider__img-preview" src={desktop_slide_3} alt="slider auto 3" width="128" height="80" />
                    </div>
                <button className="slider__buttons-next" onClick={handlerBtnNext}>Next</button>
            </div>
        </div>

  );
};

export default Slider;