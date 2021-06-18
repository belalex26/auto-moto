import React from 'react';

const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer__container">
          <ul className="footer__list">
            <li className="footer__item">
              <a className="footer__link" href="/auto">
                Корпоративным клиентам
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="/contacts">
                Клиентам
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="/services">
                Аренда авто
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="/job">
                Каршеринг
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="/job">
                Как продать авто
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="/job">
                Trade-in
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="/job">
                Test drive
              </a>
            </li>
          </ul>
        </div>
      </footer>
    );
  };
  
  export default Footer;