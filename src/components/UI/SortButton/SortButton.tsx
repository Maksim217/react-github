import React from 'react';
import { Button } from '@material-ui/core';
import { Sort } from '@material-ui/icons';
import { Sorting } from '../../../const';
import useStyles from './styles';

interface IPropsSortButton {
  isDisabled: boolean;
  sortType: Sorting;
  sortHandler: () => void;
}

const SortButton: React.FC<IPropsSortButton> = ({
  isDisabled,
  sortType,
  sortHandler,
}): React.ReactElement => {
  const classes = useStyles();

  return (
    <Button
      className={classes.sortBtn}
      onClick={sortHandler}
      disabled={isDisabled}>
      <Sort
        className={sortType === 'DESC' ? classes.sortDesc : classes.sortAsc}
        color={sortType === '' ? undefined : 'primary'}
      />
    </Button>
  );
};

export default SortButton;
