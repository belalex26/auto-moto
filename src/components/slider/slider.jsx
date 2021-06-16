import React from 'react';
import desktop_slide_1 from '../../images/desktop_slide_1.jpg';
import desktop_slide_2 from '../../images/desktop_slide_2.jpg';
import desktop_slide_3 from '../../images/desktop_slide_3.jpg';


const Slider = () => {
  return (
        <div className="slider">
            <div className="slider__track">
                <div className="slider__item">
                    <img className="slider__item-img" src={desktop_slide_1} alt="photo 1" width="600" height="375" />
                </div>
                <div className="slider__item">
                    <img className="slider__item-img" src={desktop_slide_2} alt="photo 2" width="600" height="375" />
                </div>
                <div className="slider__item">
                    <img className="slider__item-img" src={desktop_slide_3} alt="photo 3" width="600" height="375" />
                </div>
            </div>
            <div className="slider__buttons">
                <button className="slider__buttons-prev">Prev</button>
                <img className="slider__img-preview" src={desktop_slide_1} alt="photo 1" width="128" height="80" />
                <img className="slider__img-preview" src={desktop_slide_2} alt="photo 2" width="128" height="80" />
                <img className="slider__img-preview" src={desktop_slide_3} alt="photo 3" width="128" height="80" />
                <button className="slider__buttons-next">Next</button>
            </div>
        </div>

  );
};

export default Slider;