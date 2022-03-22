import React, { useEffect } from 'react'
import useFetch from '../../Hooks/useFetch';
import { REPO_SEARCH } from '../../services/api';
import Error from '../Helpers/Error';
import Loading from '../Helpers/Loading';
import './RepoList.scss'
import RepoCard from './RepoCard';

const RepoList = ({search = null}) => {

  const {data, loading, error, request} =  useFetch();

  useEffect(() => {

    if (search) {
      async function fetchRepo() {
        const {url, options} = REPO_SEARCH(search);
        await request (url, options);
      }
      fetchRepo()
    }

  }, [search, request]);

  if(error) return <Error error={error}/>
  if (loading) return <Loading />

  return (
    <div className='repo-list'>
      <h2 className='title'>Repositórios</h2>
      <div className='repo-list__container container'>
        <div className="row">
          {data && data.items.map((repo) => (
              <div key={repo.id} className="col-lg-3 col-6">
                <RepoCard repo={repo} />
              </div>
              )
            )
          }
        </div> 
      </div> 

    </div>
  )
}

export default RepoList