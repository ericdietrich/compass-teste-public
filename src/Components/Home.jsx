import React, { useContext, useState } from 'react';
import { UserContext } from '../UserContext';
import Login from './Login/Login';
import RepoList from './Repo/RepoList';
import UserList from './User/UserList';
import './Home.scss';

const Home = () => {
  const [input, setInput] = useState('');
  const [search, setSearch] = useState('');

  const { login } = useContext(UserContext);

  async function handleSearch (event) {
    event.preventDefault();
    setSearch(input)
  }
  
  if (!login) return <Login />

  return (
    <>
      <form className='search-form container' onSubmit={handleSearch} >
        <input className='search-form__input' type="text" placeholder="Digite sua pesquisa" value={input} onChange={({target}) => setInput(target.value)} />
        <button className='search-form__button btn' type='submit'>Pesquisar</button>
      </form>

      <UserList search={search} />
      <RepoList search={search} />

    </>
  )
}

export default Home