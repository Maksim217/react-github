import React, { FC } from 'react';
import {
  Avatar,
  ListItem,
  ListItemText,
  ListItemAvatar,
} from '@material-ui/core';
import { IProfile } from '../../../models/IProfile';
import useStyles from './styles';

interface IUserItem {
  user: IProfile;
  children: React.ReactNode
  linkLabel: string;
}

const UserItem: FC<IUserItem> = ({
  user, children,linkLabel  
}): React.ReactElement => {
  const classes = useStyles();

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
          secondary={
            <a 
              className={classes.secondaryLink} 
              href={user.html_url}
            >
              {linkLabel}
            </a>
          }
        />
        {children}
      </ListItem>
    </>
  );
};

export default UserItem;