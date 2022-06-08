import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  title: {
    fontSize: 54,
    color: '#FFFFFF',
    marginBottom: 30,
  },
  containerItem: {
    flex: '50%',
  },
  team: {
    marginRight: 20,
  },
  teamHeader: {
    padding: '19px 16px',
    borderBottom: '2px solid gray',
    width: '100%',
  },
  teamHeaderTitle: {
    display: 'flex',
    alignItems: 'center',
  },
  teamHeaderSort: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
  teamLoader: {
    height: '100vh',
    backgroundColor: '#d9d9d9',
    marginTop: '-11rem',
  },
  listContainer: {
    height: '60vh',
    width: '100%',
    overflowY: 'scroll',
  },
  list: {
    width: '100%',
  },
  userHeader: {
    padding: 16,
    borderBottom: '2px solid gray',
    width: '100%',
  },
  userHeaderTitle: {
    display: 'flex',
    alignItems: 'center',
  },
  userHeaderSearch: {
    width: '100%',
  },
  listItemTextPrimary: {
    textAlign: 'center',
  },
  [theme.breakpoints.down('sm')]: {
    container: {
      flexDirection: 'column',
    },
    team: {
      marginRight: 0,
      marginBottom: 20,
    },
  },
  [theme.breakpoints.down('xs')]: {
    title: {
      fontSize: 42,
    },
    teamHeaderTitle: {
      display: 'none',
    },
    userHeaderTitle: {
      display: 'none',
    },
    listItemText: {
      fontSize: '0.8em',
    },
    btn: {
      fontSize: '0.7em',
    },
  },
}));
