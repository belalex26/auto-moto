import React from 'react';
import {Link} from 'react-router-dom';

import Logo from '../logo/logo';

const Menu = () => {
  return (
    <nav className="menu">
        <Logo />
        <ul className="menu__list">
          <li className="menu__item">
            <Link className="menu__link" to="/auto">
              Автомобили
            </Link>
          </li>
          <li className="menu__item">
            <Link className="menu__link" to="/contacts">
              Контакты
            </Link>
          </li>
          <li className="menu__item">
            <Link className="menu__link" to="/services">
              Услуги
            </Link>
          </li>
          <li className="menu__item">
            <Link className="menu__link" to="/job">
              Вакансии
            </Link>
          </li>
      </ul>
    </nav>
  );
};

export default Menu;