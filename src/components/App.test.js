import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import App from './App';

test('renders learn react link', () => {
  let testHistory;
  let testLocation;

  render(
    <MemoryRouter initialEntries={[`/`]}>
      <App />
      <Route
        path={`*`}
        render={routeProps => {
          testHistory = routeProps.history
          testLocation = routeProps.location
          return null
        }}/>
    </MemoryRouter>
  );

  expect(testHistory);
  expect(testLocation);
});
