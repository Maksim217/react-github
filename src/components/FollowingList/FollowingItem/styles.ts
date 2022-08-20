import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  following: {
    marginBottom: 15,
  },
  followingContainer: {
    padding: 16,
  },
  followingItem: {
    marginRight: 20,
  },
  followingAvatar: {
    width: 64,
    height: 64,
  },
  followingItemTextBox: {
    display: 'flex',
    alignItems: 'center',
  },
  [theme.breakpoints.down('xs')]: {
    followingAvatar: {
      width: 48,
      height: 48,
    },
    followingItemText: {
      fontSize: 14,
    },
  },
}));
