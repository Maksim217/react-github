import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  sortBtn: {
    padding: 0,
  },
  sortAsc: {
    transform: 'rotateX(0deg)',
  },
  sortDesc: {
    transform: 'rotateX(180deg)',
  },
}));
