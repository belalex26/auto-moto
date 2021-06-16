import React from 'react';

const Contacts = () => {
  return (
      <section className="contacts">
        <h2 className="contacts__title visually-hidden">Контакты</h2>
        <div className="contacts__info">
            <p className="contacts__info">Адрес</p>
            <p className="contacts__info">Санкт-Петербург, набережная реки Карповки, дом 5</p>
            <p className="contacts__info">Режим работы</p>
            <p className="contacts__info">Ежедневно, с 10:00 до 21:00</p>
            <p className="contacts__info-tel">Телефон</p>
            <a className="contacts__info-tel-link" href="tel:88003335599">8 (800) 333-55-99</a>
            <p className="contacts__info-email">E-mail</p>
            <a className="contacts__info-email-link" href="mailto:info@avto-moto.ru">info@avto-moto.ru</a>
        </div>
        <div className="contacts__map"></div>
      </section>
  );
};

export default Contacts;