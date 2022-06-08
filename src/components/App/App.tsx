import React, { FC } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { Container } from '@material-ui/core';
import { Profile, Team } from '../../pages';
import { Navbar } from '..';
import { PageTitle, Path } from '../../const';
import { ThemeProvider } from '@material-ui/core/styles';
import MainTheme from './styles';

const App: FC = (): React.ReactElement => {
  return (
    <Router>
      <ThemeProvider theme={MainTheme}>
        <Container maxWidth='xl'>
          <Navbar />
          <Routes>
            <Route
              path={Path.Profile}
              element={<Profile title={PageTitle.Profile} />}
            />
            <Route path={Path.Team} element={<Team title={PageTitle.Team} />} />
            <Route path='*' element={<Navigate to={Path.Profile} />} />
          </Routes>
        </Container>
      </ThemeProvider>
    </Router>
  );
};

export default App;
