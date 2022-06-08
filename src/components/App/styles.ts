import { createTheme } from '@material-ui/core/styles';

const mainTheme = createTheme({
  breakpoints: {
    values: {
      xs: 321,
      sm: 481,
      md: 769,
      lg: 1200,
      xl: 1440,
    },
  },
});

export default mainTheme;
