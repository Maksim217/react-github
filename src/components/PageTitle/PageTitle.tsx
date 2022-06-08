import React, { FC } from 'react';
import { Typography } from '@material-ui/core';
import useStyles from './styles';

interface IPropsPageTitle {
  title: string;
}

const PageTitle: FC<IPropsPageTitle> = ({ title }): React.ReactElement => {
  const classes = useStyles();

  return (
    <Typography className={classes.title} variant='h1'>
      {title}
    </Typography>
  );
};

export default PageTitle;
