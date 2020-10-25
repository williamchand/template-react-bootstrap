import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import SearchPage from '../component/search';
import HomePage from '../component/home';

function Content() {
  return (
    <Container>
      <Switch>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/search">
          <SearchPage />
        </Route>
      </Switch>
    </Container>
  );
}

export default Content;
