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
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Divider,
  Button,
} from '@material-ui/core';
import {
  fetchUsers,
  addToTeam,
  removeFromTeam,
  sortTeam,
} from '../../store/reducers/team/ActionCreators';
import { Alert, Skeleton } from '@material-ui/lab';
import { PageTitle } from '../../components';
import { SortButton } from '../../components/UI';
import { IProfile } from '../../models/IProfile';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { checkSubstring } from '../../utils/utils';
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
    (user: IProfile) => (): void => dispatch(addToTeam(user)),
    [],
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

  const renderInfoBlock = (text: string): React.ReactElement => (
    <ListItem>
      <ListItemText
        classes={{
          primary: classes.listItemTextPrimary,
        }}
        primary={text}
      />
    </ListItem>
  );

  const renderUserItem = (
    user: IProfile,
    btnLabel: string,
    btnHandler: () => void,
  ): React.ReactElement => {
    return (
      <>
        <ListItem>
          <ListItemAvatar>
            <Avatar src={user.avatar_url} />
          </ListItemAvatar>
          <ListItemText
            classes={{
              primary: classes.listItemText,
              secondary: classes.listItemText,
            }}
            primary={user.login}
          />
          {!user.is_member_team ? (
            <Button className={classes.btn} onClick={btnHandler}>
              {btnLabel}
            </Button>
          ) : (
            <Typography>УЖЕ В КОМАНДЕ</Typography>
          )}
        </ListItem>
        <Divider />
      </>
    );
  };

  const renderTeamList = (): React.ReactElement[] | React.ReactElement => {
    if (requested && !team.length) {
      return renderInfoBlock('СПИСОК КОМАНДЫ ПУСТ');
    }

    return team.map((user) => {
      return (
        <div key={user.id}>
          {renderUserItem(user, 'удалить', deleteFromTeam(user.id))}
        </div>
      );
    });
  };

  const renderUserList = (): React.ReactElement[] | React.ReactElement => {
    if (requested && !users.length) {
      return renderInfoBlock('СПИСОК ПОЛЬЗОВАТЕЛЕЙ ПУСТ');
    }

    return users.map((user) => {
      if (deferredText) {
        if (checkSubstring(user.login, deferredText)) {
          return (
            <div key={user.id}>
              {renderUserItem(user, 'в команду', toTeam(user))}
            </div>
          );
        }
        return <div key={user.id}></div>;
      } else {
        return (
          <div key={user.id}>
            {renderUserItem(user, 'в команду', toTeam(user))}
          </div>
        );
      }
    });
  };

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
              <List className={classes.list}>{renderTeamList()}</List>
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
              <List className={classes.list}>{renderUserList()}</List>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Team;
