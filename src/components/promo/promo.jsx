import React from 'react';

import Slider from '../slider/slider';

const Promo = () => {
  return (
    <section className="promo">
      <div className="promo__container">
        <div className="promo__slider">
          <Slider/>
        </div>
        <div className="promo__content">
            <h2 className="promo__title">Марпех 11</h2>
            <ul className="promo__info">
                <li className="promo__info-item">
                    <p className="promo__info-text">бензин</p>
                </li>
                <li className="promo__info-item">
                    <p className="promo__info-text promo__info-transmission">механика</p>
                </li>
                <li className="promo__info-item">
                    <p className="promo__info-text promo__info-power">100 л.с</p>
                </li>
                <li className="promo__info-item">
                    <p className="promo__info-text promo__info-volume">1.4 л</p>
                </li>
            </ul>
            <div className="promo__price">
            <p className="promo__price-sale">2 300 000 ₽</p>
              <p className="promo__price-full">2 400 000 ₽</p>
            </div>

            <div className="promo__btn-control">
              <a className="promo__feedback" href="/feedback">Оставить заявку</a>
              <a className="promo__credit" href="/credit">в кредит от 11 000 ₽</a>
            </div>

        </div>
      </div>  
    </section>
  );
};

export default Promo;