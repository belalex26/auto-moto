import React from 'react';

import WrappedMap from '../maps/maps';

const GOOGLE_MAP_KEY = 'AIzaSyAtXraCKerhmWfuQ6GQz40TVnyr6Ocep2s';

const Contacts = () => {
  return (
      <section className="contacts">
        <h2 className="contacts__title visually-hidden">Контакты</h2>
        <div className="contacts__info">
            <p className="contacts__info-address">Адрес</p>
            <p className="contacts__info-address-text"><span>Санкт-Петербург,</span> набережная реки Карповки, дом 5</p>
            <p className="contacts__info-mode">Режим работы</p>
            <p className="contacts__info-mode-text">Ежедневно, с 10:00 до 21:00</p>
            <p className="contacts__info-tel">Телефон</p>
            <a className="contacts__info-tel-link" href="tel:88003335599">8 (800) 333-55-99</a>
            <p className="contacts__info-email">E-mail</p>
            <a className="contacts__info-email-link" href="mailto:info@avto-moto.ru">info@avto-moto.ru</a>
        </div>
        <div className="contacts__map">
          <WrappedMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${GOOGLE_MAP_KEY}`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `271px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
      </section>
  );
};

export default Contacts;