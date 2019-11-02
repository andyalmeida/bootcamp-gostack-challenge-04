import React from 'react';

import logo from '../assets/logo.png';
import account_icon from '../assets/account_icon.png';

function Header() {
  return (
    <div id="header">
      <img src={logo} alt="Facebook"/>
      <div>
        <a href="#">Meu perfil</a>
        <img src={account_icon} alt="account"/>
      </div>
    </div>
  );
}

export default Header;