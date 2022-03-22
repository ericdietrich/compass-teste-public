import React, { useContext, useState } from 'react'
import { UserContext } from '../../UserContext'
import UserRepoList from './UserRepoList';
import UserStarredList from './UserStarredList';
import {ReactComponent as StarImg} from '../../Assets/img/star.svg'
import {ReactComponent as RepoImg} from '../../Assets/img/repository.svg'
import {ReactComponent as SmileImg} from '../../Assets/img/smile.svg'
import './User.scss'

const User = () => {
  const {user} = useContext(UserContext);
  const [selectedOption, setSelectedOption] = useState(null)

  return (
    <div className='container user'>
      <div className="row">
        <div className="col-lg-3 col-12 user__profile">
          <img className='user__profile__img' src={user.avatar_url} alt={user.login} />
          <p className='user__profile__name'><SmileImg/>{user.login}</p>
          <div className="user__buttons">
            <button 
              className={`btn user__buttons__btn${selectedOption === 'starred' ? ' is-active' : ''}`}
              onClick={() => {setSelectedOption('starred')}}>
              <StarImg /> Starred
            </button>
            <button 
              className={`btn user__buttons__btn${selectedOption === 'repos' ? ' is-active' : ''}`} 
              onClick={() => {setSelectedOption('repos')}}>
              <RepoImg />Repos
            </button>

          </div>
        </div>
        <div className="col-lg-9 col-12 user__repo">
          {selectedOption === 'repos' && <UserRepoList user={user.login} /> }
          {selectedOption === 'starred' && <UserStarredList user={user.login} /> }
          {!selectedOption && <p style={{textAlign: 'center', marginTop: '30px'}}>Selecione Repos ou Starred</p>}
        </div>
      </div>
    </div>
  )
}

export default User