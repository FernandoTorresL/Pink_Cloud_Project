import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions';
import '../assets/styles/Header.scss';
import headerLogo from '../assets/static/header_logo.png';
import iconNavMenu from '../assets/static/icon-nav-menu.png';

const Header = (props) => {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    props.logoutRequest({});
  };

  return (
    <header className='header'>
      <div className='header__logo'>
        <Link to="/">
          <img className='header__logo__img' src={headerLogo} alt='Logo' />
        </Link>
        <p className='header__logo__title'>Logo</p>
      </div>

      <div className='header__nav__menu'>

        <div className='header__nav__menu--dropdown'>
          {hasUser ? 
            <img src={gravatar(user.email)} alt={user.email} /> :
            <img src={iconNavMenu} alt='' />
          }
          <p>Perfil</p>
        </div>

        <ul>
        {hasUser ?
          <li><a href='/'>{user.name}</a></li> :
          null }

        {hasUser ?
          <li><a href='#logout' onClick={handleLogout}>Cerrar Sesión</a></li> :
          (
            <li>
              <Link to='/login'>
                Iniciar Sesión
              </Link>
            </li>
          ) }
        </ul>

      </div>

    </header>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
