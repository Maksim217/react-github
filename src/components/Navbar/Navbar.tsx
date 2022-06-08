import React, { FC, useState, useEffect } from 'react';
import { AppBar, Typography, Tabs } from '@material-ui/core';
import { DrawerMenu } from '..';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { LinkTab, MenuIconButton } from '../UI';
import { PageTitle, Path } from '../../const';
import useStyles from './styles';

const usePathname = () => {
  const location = useLocation();
  return location.pathname;
};

const Navbar: FC = (): React.ReactElement => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [value, setValue] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);

  const currentPath = usePathname();

  useEffect(() => {
    changeTab(currentPath);
  }, [currentPath]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const changeTab = (path: string) => {
    switch (path) {
      case Path.Profile:
        setValue(0);
        break;
      case Path.Team:
        setValue(1);
        break;
      default:
        setValue(0);
        break;
    }
  };

  const changePath = (id: number) => {
    switch (id) {
      case 0:
        navigate(Path.Profile);
        break;
      case 1:
        navigate(Path.Team);
        break;
      default:
        navigate(Path.Profile);
    }
  };

  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);
    changePath(newValue);
  };

  return (
    <AppBar className={classes.appBar} position='static' color='inherit'>
      <MenuIconButton className={classes.menuIcon} handleClick={handleOpen} />
      <DrawerMenu menuOpen={open} menuClose={handleClose} />
      <div className={classes.brandContainer}>
        <Typography
          className={classes.heading}
          component={Link}
          to={Path.Profile}
          onClick={() => setValue(0)}
          variant='h2'
          align='center'>
          Github project
        </Typography>
      </div>
      <Tabs
        className={classes.tabs}
        value={value}
        onChange={handleChange}
        indicatorColor='primary'
        textColor='primary'>
        <LinkTab label={PageTitle.Profile} href={Path.Profile} />
        <LinkTab label={PageTitle.Team} href={Path.Team} />
      </Tabs>
    </AppBar>
  );
};

export default Navbar;
