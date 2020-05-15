import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Header.scss';
import headerLogo from '../assets/static/header_logo.png';
import iconNavMenu from '../assets/static/icon-nav-menu.png';

const Header = () => (
  <header className='header'>
    <div className='header__logo'>
      <Link to="/">
        <img className='header__logo__img' src={headerLogo} alt='Logo' />
      </Link>
      <p className='header__logo__title'>Logo</p>
    </div>

    <div className='header__nav__menu'>

      <div className='header__nav__menu--dropdown'>
        <img src={iconNavMenu} alt='Portrait' />
        <p>Username</p>
      </div>

      <ul>
        <li>
          <a href='/'>Cuenta</a>
        </li>
        <li>
          <Link to='/login'>
            Iniciar sesión
          </Link>
        </li>
      </ul>

    </div>

  </header>
);

export default Header;
