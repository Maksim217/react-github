import React, { FC } from 'react';
import { Button } from '@material-ui/core';
import useStyles from './styles';

interface IPropsShowMoreButton {
  showingMoreRepos: () => void;
}

const ShowMoreButton: FC<IPropsShowMoreButton> = ({
  showingMoreRepos,
}): React.ReactElement => {
  const classes = useStyles();

  return (
    <div className={classes.showMoreButton}>
      <Button onClick={showingMoreRepos} variant='contained'>
        Показать еще
      </Button>
    </div>
  );
};

export default ShowMoreButton;
