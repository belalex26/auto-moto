import React, { useRef, useState } from 'react';
import desktop_slide_1 from '../../images/desktop_slide_1.jpg';
import desktop_slide_2 from '../../images/desktop_slide_2.jpg';
import desktop_slide_3 from '../../images/desktop_slide_3.jpg';
 

const Slider = () => {
    const slider = useRef(null);
    const [items] = useState([1, 2, 3, 4]);
    const [prev, setPrev] = useState(true);
    const [next, setNext] = useState(false);

    let position = 0;

    const prevHandler = () => {
        position = position + 600

            setPrev(false)

            slider.current.childNodes.forEach((element) => {
                element.style = `transform: translateX(${position}px)`
            })

        if (position === 0) {
            setPrev(false)
        }
    }

    const nextHandler = () => {
        if (position === -(items.length - 1) * 600) {
            setNext(true)
            setPrev(false)
          
        } else {
            // setNext(false)
            setPrev(false)

            position -= 600;
            slider.current.childNodes.forEach((element) => {
                element.style= `transform: translateX(${position}px)`

                if (position === -1200) {
                    setNext(true)
                    setPrev(false)
                }
            })
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