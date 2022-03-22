import React from 'react';
import { ReactComponent as RepositoryImg } from '../../Assets/img/repository.svg';
import './RepoCard.scss';

const RepoCard = ({repo}) => {
  return (
    <div className='repo-card' >
      <div className="repo-card__header">
        <div className="repo-card__header__img">
          <RepositoryImg />
        </div>
        <p className="repo-card__header__name">{repo.name}</p>
      </div>
      <p className="repo-card__author"><span>Autor: </span>{repo.owner.login}</p>
      {repo.description && <p className="repo-card__description"><span>Descrição: </span>{repo.description}</p> }
    </div>
  )
}

export default RepoCard