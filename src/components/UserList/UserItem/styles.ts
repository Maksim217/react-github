import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  secondaryLink: {
    textDecoration: 'none',
    color: 'rgba(0, 0, 0, 0.6)',
  },
  [theme.breakpoints.down('xs')]: {
    listItemText: {
      fontSize: '0.8em',
    },
    btn: {
      fontSize: '0.7em',
    },
  },
}));