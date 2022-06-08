import React, { FC } from 'react';
import { Tab } from '@material-ui/core';

interface ILinkTabProps {
  label?: string;
  href?: string;
}

const LinkTab: FC<ILinkTabProps> = (props): React.ReactElement => {
  return (
    <Tab
      component='a'
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
};

export default LinkTab;
