import React, { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { Alert } from '@material-ui/lab';
import { ShowMoreButton } from '../UI';
import { FollowingItem } from '..';
import { fetchFollowing } from '../../store/reducers/following/ActionCreators';
import { Reducer, SHOWING_FOLLOWING_COUNT_BY_BUTTON } from '../../const';
import { parseUrl } from '../../utils/utils';
import Loader from '../Loader';

interface IPropsFollowingList {
  followingUrl: string;
}

const FollowingList: FC<IPropsFollowingList> = ({
  followingUrl,
}): React.ReactElement => {
  const [showingFollowingCount, setShowingFollowingCount] = useState(
    SHOWING_FOLLOWING_COUNT_BY_BUTTON,
  );
  const dispatch = useAppDispatch();
  const { following, isLoading, requested, error } = useAppSelector(
    (state) => state[Reducer.Following],
  );

  useEffect(() => {
    if (!requested) {
      const parsedUrl = parseUrl(followingUrl);
      dispatch(fetchFollowing(parsedUrl));
    }
  }, []);

  if (error) {
    return <Alert severity='error'>{error}</Alert>;
  }

  if (isLoading) {
    return <Loader count={SHOWING_FOLLOWING_COUNT_BY_BUTTON} />;
  }

  if (requested && following.length === 0) {
    return <Alert severity='info'>Нет подписок</Alert>;
  }

  const showingMoreFollowing = () => {
    const currentReposCount =
      showingFollowingCount + SHOWING_FOLLOWING_COUNT_BY_BUTTON;
    setShowingFollowingCount(currentReposCount);
  };

  return (
    <>
      {following.slice(0, showingFollowingCount).map((following) => (
        <FollowingItem key={following.id} following={following} />
      ))}
      {showingFollowingCount < following.length && (
        <ShowMoreButton showingMoreRepos={showingMoreFollowing} />
      )}
    </>
  );
};

export default React.memo(FollowingList);
