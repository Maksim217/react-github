import React, {
  FC,
  useState,
  useDeferredValue,
  useEffect,
  useCallback,
} from 'react';
import { IPropsPage } from '../contracts';
import {
  Paper,
  Grid,
  Typography,
  TextField,
} from '@material-ui/core';
import {
  fetchUsers,
  addToTeam,
  removeFromTeam,
  sortTeam,
} from '../../store/reducers/team/ActionCreators';
import { Alert, Skeleton } from '@material-ui/lab';
import { PageTitle, UserList } from '../../components';
import { SortButton } from '../../components/UI';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { Reducer } from '../../const';
import useStyles from './styles';

const Team: FC<IPropsPage> = ({ title }): React.ReactElement => {
  const classes = useStyles();
  const [searchUsers, setSearchUsers] = useState('');
  const deferredText = useDeferredValue(searchUsers);

  const dispatch = useAppDispatch();
  const { users, team, teamSortType, requested, isLoading, error } =
    useAppSelector((state) => state[Reducer.Team]);

  useEffect(() => {
    if (!requested) {
      dispatch(fetchUsers());
    }
  }, []);

  const toTeam = useCallback(
    (id: number) => (): void => { 
      const user = users.find(u => u.id === id);
      if(user) {
        dispatch(addToTeam(user));
      }
    },
    [users],
  );

  const deleteFromTeam = useCallback(
    (id: number) => (): void => dispatch(removeFromTeam(id)),
    [],
  );

  const sort = useCallback(() => {
    if (teamSortType === '' || teamSortType === 'ASC')
      dispatch(sortTeam('DESC'));
    else dispatch(sortTeam('ASC'));
  }, [teamSortType]);

  const search = (event: React.ChangeEvent<HTMLInputElement>): void =>
    setSearchUsers(event.target.value);

  if (error) {
    return (
      <Alert severity='error'>Не удалось загрузить список пользователей</Alert>
    );
  }

  if (isLoading) {
    return (
      <>
        <PageTitle title={title} />
        <Skeleton className={classes.teamLoader} />
      </>
    );
  }

  return (
    <>
      <PageTitle title={title} />
      <Grid className={classes.container} container>
        <Grid className={classes.containerItem} item>
          <Paper className={classes.team}>
            <Grid className={classes.teamHeader} container>
              <Grid className={classes.teamHeaderSort} xs={2} item>
                <SortButton
                  isDisabled={team.length > 1 ? false : true}
                  sortType={teamSortType}
                  sortHandler={sort}
                />
              </Grid>
              <Grid className={classes.teamHeaderTitle} xs={10} item>
                <Typography>Команда</Typography>
              </Grid>
            </Grid>
            <Grid className={classes.listContainer}>
              <UserList
                users={team}
                messageText="СПИСОК КОМАНДЫ ПУСТ"
                btnLabel="удалить"
                userHandler={deleteFromTeam}
              />
            </Grid>
          </Paper>
        </Grid>
        <Grid className={classes.containerItem} item>
          <Paper>
            <Grid className={classes.userHeader} container>
              <Grid className={classes.userHeaderTitle} xs={4} item>
                <Typography>Пользователи</Typography>
              </Grid>
              <Grid sm={8} xs={12} item>
                <TextField
                  className={classes.userHeaderSearch}
                  variant='outlined'
                  placeholder='Введите логин'
                  name='search'
                  value={deferredText}
                  onChange={search}
                />
              </Grid>
            </Grid>
            <Grid className={classes.listContainer}>
              <UserList
                users={users}
                messageText="СПИСОК ПОЛЬЗОВАТЕЛЕЙ ПУСТ"
                deferredText={deferredText}
                btnLabel="в команду"
                userHandler={toTeam}
              />
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Team;
