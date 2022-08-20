import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  list: {
    width: '100%',
  },
  [theme.breakpoints.down('xs')]: {
    btn: {
      fontSize: '0.7em',
    },
  },
}));