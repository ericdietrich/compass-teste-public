import { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import useFetch from '../../Hooks/useFetch';
import { VALIDATE_LOGIN } from '../../services/api';
import { UserContext } from '../../UserContext';
import Loading from '../Helpers/Loading'



const Lobby = () => {
  const { setLogin } = useContext(UserContext);
  const navigate = useNavigate();
  const search = useLocation().search;
  const code = new URLSearchParams(search).get('code');
  const {data, request} =  useFetch();

  useEffect(() => {
    if(code) {
      setLogin(true);
      navigate('/');
    }
  }, [code])

  
  
  //Not Working
/*   useEffect(() => {
    if(code) {
      async function auth() {
        const {url, options} = VALIDATE_LOGIN(code);
        await request (url, options);
      }
      auth();
      if(data) {
        window.localStorage.setItem('github_token', data.access_token)
        setLogin(true);
        navigate('/');
      }
    }

  }, [code]) */

  return null
}

export default Lobby