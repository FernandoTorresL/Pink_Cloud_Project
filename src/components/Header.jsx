import React from 'react';
import '../assets/styles/components/Header.scss';
import headerLogo from '../assets/static/header_logo.png';
import iconoNavmenu from '../assets/static/icono-navmenu.png';

const Header = () => (
  <header className='header'>

    <div className='header__logo'>
      <img className='header__logo__img' src={headerLogo} alt='Logo' />
      <p className='header__logo__title'>Logo</p>
    </div>

    <div className='header__navmenu'>

      <div className='header__navmenu--dropdown'>
        <img src={iconoNavmenu} alt='Portrait' />
        <p>Username</p>
      </div>

      <ul>
        <li>
          <a href='/'>Cuenta</a>
        </li>
        <li>
          <a href='/'>Cerrar sesión</a>
        </li>
      </ul>

    </div>

  </header>
);

export default Header;
