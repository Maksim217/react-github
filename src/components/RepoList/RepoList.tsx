import React, { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { Alert } from '@material-ui/lab';
import { ShowMoreButton } from '../UI';
import { RepoItem } from '..';
import { fetchRepos } from '../../store/reducers/repos/ActionCreators';
import { Reducer, SHOWING_REPOS_COUNT_BY_BUTTON } from '../../const';
import Loader from '../Loader';

interface IPropsRepoList {
  reposUrl: string;
}

const RepoList: FC<IPropsRepoList> = ({ reposUrl }): React.ReactElement => {
  const [showingReposCount, setShowingReposCount] = useState(
    SHOWING_REPOS_COUNT_BY_BUTTON,
  );
  const dispatch = useAppDispatch();
  const { repos, isLoading, requested, error } = useAppSelector(
    (state) => state[Reducer.Repos],
  );

  useEffect(() => {
    if (!requested) {
      dispatch(fetchRepos(reposUrl));
    }
  }, []);

  if (error) return <Alert severity='error'>{error}</Alert>;

  if (isLoading) {
    return <Loader count={SHOWING_REPOS_COUNT_BY_BUTTON} />;
  }

  if (requested && repos.length === 0) {
    return <Alert severity='info'>Нет репозиториев</Alert>;
  }

  const showingMoreRepos = () => {
    const currentReposCount = showingReposCount + SHOWING_REPOS_COUNT_BY_BUTTON;
    setShowingReposCount(currentReposCount);
  };

  return (
    <>
      {repos.slice(0, showingReposCount).map((repo) => (
        <RepoItem key={repo.id} repo={repo} />
      ))}
      {showingReposCount < repos.length && (
        <ShowMoreButton showingMoreRepos={showingMoreRepos} />
      )}
    </>
  );
};

export default React.memo(RepoList);
