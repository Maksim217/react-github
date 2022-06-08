import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
  Grid,
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import PeopleIcon from '@material-ui/icons/People';
import { PageTitle, Path } from '../../const';
import useStyles from './styles';

interface IDrawerMenuProps {
  menuOpen: boolean;
  menuClose: () => void;
}

const DrawerMenu: FC<IDrawerMenuProps> = ({
  menuOpen,
  menuClose,
}): React.ReactElement => {
  const classes = useStyles();

  return (
    <Drawer anchor='left' open={menuOpen} onClose={menuClose}>
      <List className={classes.list}>
        <Grid container justifyContent='flex-end'>
          <IconButton className={classes.chevronLef} onClick={menuClose}>
            <ChevronLeftIcon />
          </IconButton>
        </Grid>
        <Divider />
        <ListItem component={Link} to={Path.Profile} onClick={menuClose}>
          <ListItemIcon>
            <AccountBoxIcon />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{ color: 'primary' }}
            primary={PageTitle.Profile}
          />
        </ListItem>
        <Divider />
        <ListItem component={Link} to={Path.Team} onClick={menuClose}>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{ color: 'primary' }}
            primary={PageTitle.Team}
          />
        </ListItem>
        <Divider />
      </List>
    </Drawer>
  );
};

export default DrawerMenu;
