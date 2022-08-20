import React, { FC } from 'react';
import { ListItem, ListItemText, } from '@material-ui/core';
import useStyles from './styles';

interface IMessageSection {
    text: string;
}

const MessageSection: FC<IMessageSection> = ({ text }): React.ReactElement => {
  const classes = useStyles();

  return (
    <ListItem>
      <ListItemText
        classes={{
          primary: classes.textPrimary,
        }}
        primary={text}
      />
    </ListItem>
  );
};

export default MessageSection;