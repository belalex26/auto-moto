import React from 'react';
import {Link} from 'react-router-dom';

import logo from '../../images/logo.svg';

const Logo = () => {
  return (
    <Link className="logo" to="/">
      <img className="logo__image" src={logo} alt="Лига-Ьанк" width="134" height="55" />
    </Link>
  );
};

export default Logo;