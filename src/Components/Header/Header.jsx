import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as GithubLogo } from '../../Assets/img/github.svg';
import './Header.scss';

const Header = () => {
  return (
    <header className='header'>
      <Link to={'/'} className="container header__container">
        <GithubLogo className='header__logo' />
        <h1 className="header__title">Github API Search</h1>
      </Link>
    </header>
  )
}

export default Header