import React from 'react';

import { YMaps, Map, Placemark } from 'react-yandex-maps';

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

        <YMaps>
          <div className="contacts__map">
            <Map
              defaultState={{ center: [59.968137, 30.316272], zoom: 16 }}
              width="431px"
              height="271px"
            >
              <Placemark geometry={[59.968137, 30.316272]} />
            </Map>
          </div>
        </YMaps>

      </section>
  );
};

export default Contacts;