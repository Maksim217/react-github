import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px 10px 38px',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
    textDecoration: 'none',
    fontSize: 48,
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  menuIcon: {
    display: 'none',
  },
  [theme.breakpoints.down('md')]: {
    heading: {
      fontSize: '30px',
    },
  },
  [theme.breakpoints.down('sm')]: {
    menuIcon: {
      display: 'block',
    },
    tabs: {
      display: 'none',
    },
  },
  [theme.breakpoints.down('xs')]: {
    appBar: {
      padding: '10px 20px 10px 8px',
    },
    heading: {
      fontSize: 26,
    },
  },
}));
