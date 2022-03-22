import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import useFetch from '../../Hooks/useFetch'
import { USER_SEARCH } from '../../services/api';
import { UserContext } from '../../UserContext';
import Error from '../Helpers/Error';
import Loading from '../Helpers/Loading';
import './UserList.scss';

const UserList = ({search = null}) => {
  const {data, loading, error, request} =  useFetch();
  const navigate = useNavigate();
  const {setUser} = useContext(UserContext)

  useEffect(() => {
    if (search) {
      async function fetchUsers() {
        const {url, options} = USER_SEARCH(search);
        await request (url, options);
      }
      fetchUsers()
    }
  }, [search, request])

  function navigateUser (user) {
    setUser(user)
    navigate(`/user/profile/${user.login}`)
  } 

  if(error) return <Error error={error}/>

  if (loading) return <Loading />


    return (
      <div className='user-list'>
        <h2 className='title'>Usuários</h2>
  
        <div className='user-list__container container'>
          <div className="row">
            {data && data.items.map((user) => (
                <div key={user.id} className="col-lg-3 col-6">
                  <div className='user-list__item' >
                    <div className="user-list__profile">
                      <div className="user-list__profile__img">
                        <img src={user.avatar_url} alt={user.login} />
                      </div>
                      <p className='user-list__profile__login'>{user.login}</p>
                    </div>
                    <button className='user-list__button btn' onClick={() => navigateUser(user)}>Ver Usuário</button>
                  </div>
                </div>
                )
              )
            }
          </div>
  
        </div>
      </div>
    )
  
}

export default UserList