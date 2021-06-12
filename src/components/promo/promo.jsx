import React from 'react';

const Promo = () => {
  return (
    <section className="promo">
      <div className="container">
        <div className="promo__slider"></div>
        <div className="promo__content">
            <h2 className="promo__title">Марпех 11</h2>
            <ul className="promo__info">
                <li className="promo__info-item">
                    <p className="promo__info-text">бензин</p>
                </li>
                <li className="promo__info-item">
                    <p className="promo__info-text">механика</p>
                </li>
                <li className="promo__info-item">
                    <p className="promo__info-text">100 л.с</p>
                </li>
                <li className="promo__info-item">
                    <p className="promo__info-text">1.4 л</p>
                </li>
            </ul>
            <p className="promo__price">2 300 000</p>
            <a className="promo__feedback" href="/feedback">Оставить заявку</a>
            <a className="promo__credit" href="/credit">в кредит от 11 000 ₽</a>
        </div>
      </div>  
    </section>
  );
};

export default Promo;