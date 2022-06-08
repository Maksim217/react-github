import React, { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchProfile } from '../../store/reducers/profile/ActionCreators';
import { Grid, Typography } from '@material-ui/core';
import { Alert, Skeleton } from '@material-ui/lab';
import { Loader, PageTitle } from '../../components';
import { MyProfile, RepoList, FollowingList } from '../../components';
import { IPropsPage } from '../contracts';
import {
  Reducer,
  SHOWING_FOLLOWING_COUNT_BY_BUTTON,
  SHOWING_REPOS_COUNT_BY_BUTTON,
} from '../../const';
import useStyles from './styles';

const Profile: FC<IPropsPage> = ({ title }): React.ReactElement => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const { profile, isLoading, requested, error } = useAppSelector(
    (state) => state[Reducer.Profile],
  );

  useEffect(() => {
    if (!requested) {
      dispatch(fetchProfile());
    }
  }, []);

  const renderMyProfile = (): React.ReactElement => {
    if (isLoading) {
      return <Skeleton style={{ height: 340, backgroundColor: '#d9d9d9' }} />;
    }

    return <MyProfile profile={profile} />;
  };

  const renderRepoList = (): React.ReactElement => {
    if (isLoading || !requested) {
      return <Loader count={SHOWING_REPOS_COUNT_BY_BUTTON} />;
    }
    return <RepoList reposUrl={profile.repos_url} />;
  };

  const renderFollowingList = (): React.ReactElement => {
    if (isLoading || !requested) {
      return <Loader count={SHOWING_FOLLOWING_COUNT_BY_BUTTON} />;
    }
    return <FollowingList followingUrl={profile.following_url} />;
  };

  if (error) {
    return <Alert severity='error'>{error}</Alert>;
  }

  return (
    <>
      <PageTitle title={title} />
      <section className={classes.section}>
        <Grid item xs={12} sm={8} md={4}>
          {renderMyProfile()}
        </Grid>
      </section>
      <Typography className={classes.subTitle} variant='h3'>
        Список репозиториев
      </Typography>
      <section className={classes.section}>{renderRepoList()}</section>
      <Typography className={classes.subTitle} variant='h3'>
        Список подписок пользователя
      </Typography>
      <section className={classes.section}>{renderFollowingList()}</section>
    </>
  );
};

export default Profile;
