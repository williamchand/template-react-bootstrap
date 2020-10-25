import React, { Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom'
import Header from './header';
import Content from './content';

function App() {
  const location = useLocation();
  if (location.pathname === '/') {
    return <Redirect to="/home" />;
  }

  return (
    <Suspense fallback="loading">
      <div className="App">
        <Switch>
          <Route path="/">
            <Header />
            <Content />
          </Route>
        </Switch>
      </div>
    </Suspense>
  );
}

export default App;
