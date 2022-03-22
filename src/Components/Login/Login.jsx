import React from 'react';
import { api, LOGIN } from '../../services/api';
import { ReactComponent as GithubLogo } from '../../Assets/img/github.svg';
import './Login.scss';

const Login = () => {

  const {url} = LOGIN();

  return (
    <div className='login'>
      <a
        className='login__link'
        href={url}>
          <GithubLogo className='login__logo' />
          Logar com Github
      </a>

    </div>
  )
}

export default Login