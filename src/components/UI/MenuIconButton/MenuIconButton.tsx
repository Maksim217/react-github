import React, { FC } from 'react';
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

interface IMenuIconButtonProps {
  className?: any;
  handleClick: () => void;
}

const MenuIconButton: FC<IMenuIconButtonProps> = ({
  className,
  handleClick,
}): React.ReactElement => {
  return (
    <div className={className}>
      <IconButton onClick={handleClick}>
        <MenuIcon color='primary' />
      </IconButton>
    </div>
  );
};

export default MenuIconButton;
