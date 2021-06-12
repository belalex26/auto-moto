import React from 'react';
import Logo from '../logo/logo';

const Menu = () => {
  return (
    <nav className="menu">
        <Logo />
        <ul className="menu__list">
          <li className="menu__item">
            <a className="menu__link" href="/auto">
              Автомобили
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="/contacts">
              Контакты
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="/services">
              Услуги
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="/job">
              Вакансии
            </a>
          </li>
      </ul>
    </nav>
  );
};

export default Menu;