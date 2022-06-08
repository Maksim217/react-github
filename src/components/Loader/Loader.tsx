import React, { FC } from 'react';
import { Skeleton } from '@material-ui/lab';
import useStyles from './styles';

interface IPropsLoader {
  count: number;
}

const Loader: FC<IPropsLoader> = ({ count }): React.ReactElement => {
  const classes = useStyles();

  return (
    <>
      {Array(count)
        .fill(0)
        .map((_, idx) => (
          <Skeleton className={classes.loader} key={idx} animation='wave' />
        ))}
    </>
  );
};

export default Loader;
