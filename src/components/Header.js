import React from 'react';
import PropTypes from 'prop-types';

import logo from '../assets/logo.png';
import account_icon from '../assets/account_icon.png';
import theme_icon from '../assets/theme_icon.png';

function Header({ onChangeTheme }) {
  return (
    <div id="header">
      <img src={logo} alt="Facebook"/>
      <div>
        <a href="#">Meu perfil</a>
        <img src={account_icon} alt="account"/>
        <img src={theme_icon} onClick={onChangeTheme} alt="theme"/>
      </div>
    </div>
  );
}

Header.propTypes = {
  onChangeTheme: PropTypes.func.isRequired
}

export default Header;