import React from 'react';
import logo from '../../images/logo.svg';

const Logo = () => {
  return (
    <a className="logo" href="/">
      <img className="logo__image" src={logo} alt="Лига-Ьанк" width="134" height="55" />
    </a>
  );
};

export default Logo;