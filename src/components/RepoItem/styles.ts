import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  repoItem: {
    marginBottom: 15,
  },
  repoItemName: {
    wordBreak: 'break-all',
    textDecoration: 'none',
    color: '#000000',
  },
  repoItemContainer: {
    padding: 16,
    flexDirection: 'row',
  },
  repoItemTitle: {
    fontWeight: 'bold',
  },
  repoItemLinkContainer: {
    display: 'flex',
  },
  repoItemLink: {
    wordBreak: 'break-all',
    marginRight: 20,
  },
  repoItemLinkBtn: {
    marginTop: '-6px',
    backgroundColor: '#0099cc',
    color: '#fff',
  },
  [theme.breakpoints.down('sm')]: {
    repoItemContainer: {
      flexDirection: 'column',
    },
    repoItemName: {
      display: 'flex',
      justifyContent: 'center',
    },
    repoItemTitle: {
      textAlign: 'center',
      paddingBottom: 10,
    },
    repoItemBody: {
      textAlign: 'center',
    },
    repoItemLinkContainer: {
      flexDirection: 'column',
      textAlign: 'center',
    },
    repoItemLink: {
      marginRight: 0,
      paddingBottom: 25,
    },
  },
  [theme.breakpoints.down('xs')]: {
    repoItemBody: {
      fontSize: 14,
    },
    repoItemLink: {
      fontSize: 14,
    },
  },
}));
