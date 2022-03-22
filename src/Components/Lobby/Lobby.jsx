import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import useFetch from '../../Hooks/useFetch';
import { VALIDATE_LOGIN } from '../../services/api';
import { UserContext } from '../../UserContext';
import Loading from '../Helpers/Loading'



const Lobby = () => {
  const { setLogin } = useContext(UserContext);
  const navigate = useNavigate();
  const search = useLocation().search;

  const [code, setCode] = useState (new URLSearchParams(search).get('code'));
  const {data, request} =  useFetch();

  useEffect(() => {
    if(code) {
      async function auth() {
        const {url, options} = VALIDATE_LOGIN(code);
        await request (url, options);
        console.log(data)
      }
      auth();
      setLogin(true);
      navigate('/');
    }

  }, [code])


  return (
    <></>
  )
}

export default Lobby