import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  title: {
    fontSize: 54,
    color: '#FFFFFF',
    marginBottom: 30,
  },
  subTitle: {
    fontSize: 32,
    color: '#FFFFFF',
    marginBottom: 30,
  },
  section: {
    marginBottom: 60,
  },
  profile: {
    borderRadius: 15,
    padding: '10px 50px',
    marginBottom: 30,
  },
  [theme.breakpoints.down('xs')]: {
    title: {
      fontSize: 42,
    },
    subTitle: {
      fontSize: 24,
    },
    section: {
      marginBottom: 30,
    },
  },
}));
