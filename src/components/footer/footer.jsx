import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer__container">
          <ul className="footer__list">
            <li className="footer__item">
              <Link className="footer__link" to="/auto">
                Корпоративным клиентам
              </Link>
            </li>
            <li className="footer__item">
              <Link className="footer__link" to="/contacts">
                Клиентам
              </Link>
            </li>
            <li className="footer__item">
              <Link className="footer__link" to="/services">
                Аренда авто
              </Link>
            </li>
            <li className="footer__item">
              <Link className="footer__link" to="/cardsharing">
                Каршеринг
              </Link>
            </li>
            <li className="footer__item">
              <Link className="footer__link" to="/sale">
                Как продать авто
              </Link>
            </li>
            <li className="footer__item">
              <Link className="footer__link" to="/trade-in">
                Trade-in
              </Link>
            </li>
            <li className="footer__item">
              <Link className="footer__link" to="/test-drive">
                Test drive
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    );
  };
  
  export default Footer;