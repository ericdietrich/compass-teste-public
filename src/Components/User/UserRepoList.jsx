import React, { useEffect } from 'react'
import useFetch from '../../Hooks/useFetch';
import { USER_REPO } from '../../services/api';
import Error from '../Helpers/Error';
import Loading from '../Helpers/Loading';
import RepoCard from '../Repo/RepoCard'
import './UserRepoList.scss';


const UserRepoList = ({user}) => {
  const {data, loading, error, request} =  useFetch();

  useEffect(() => {
    if (user) {
      async function fetchRepo() {
        const {url, options} = USER_REPO(user);
        await request (url, options);
      }
      fetchRepo()
    }
  }, [user, request])

  if (error) return <Error error={error}/>

  if (loading) return <Loading />

  return (
    <>
      <h2 className='title'>Repositórios</h2>
      <div className='user-repo-list row'>
        {data && data.map((repo) => (
          <div key={repo.id} className="col-xl-4 col-md-6 col-12">
            <RepoCard repo={repo} />
          </div>
          )
        )}
      </div>
    </>
  )
  
}

export default UserRepoList