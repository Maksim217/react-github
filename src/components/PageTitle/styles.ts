import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  title: {
    fontSize: 54,
    color: '#FFFFFF',
    marginBottom: 30,
  },

  [theme.breakpoints.down('xs')]: {
    title: {
      fontSize: 42,
    },
  },
}));
