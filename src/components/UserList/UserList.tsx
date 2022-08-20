import React, { FC } from 'react';
import { List, Typography, Button } from '@material-ui/core';
import { UserItem, MessageSection } from '..';
import { IProfile } from '../../models/IProfile';
import { checkSubstring } from '../../utils/utils';
import useStyles from './styles';

interface IUserList {
    users: IProfile[];
    messageText: string;
    deferredText?: string;
    btnLabel: string;
    userHandler: (id: number) => () => void;
}

const UserList: FC<IUserList> = ({ 
    users, messageText, deferredText, btnLabel, userHandler
}): React.ReactElement => {
  const classes = useStyles();

  if (!users.length) {
    return <MessageSection text={messageText} />;
  }

  return (
    <List className={classes.list}>{ users.map((user) => {
      const childrenContent = !user.is_member_team ? ( 
        <Button className={classes.btn} onClick={userHandler(user.id)}>
          {btnLabel}
        </Button> ) : ( <Typography>УЖЕ В КОМАНДЕ</Typography> );

      if (deferredText) {
        if (checkSubstring(user.login, deferredText)) {
          return (
            <div key={user.id}>
              {<UserItem 
                key={user.id} 
                user={user} 
                linkLabel="Ссылка на репозиторий"
              >
                {childrenContent}
              </UserItem>}
            </div>
          );
        }
        return null;
      } else {
        return ( 
          <div key={user.id}>
            {<UserItem 
              key={user.id} 
              user={user} 
              linkLabel="Ссылка на репозиторий"
            >
              {childrenContent}
            </UserItem>}
          </div>
        );
      }
    })}
    </List>
  );
};

export default React.memo(UserList);