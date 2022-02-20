import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Provider from '../Context/Items';

import { LandingPage, NotFound, Layout } from '../pages';

import './style.css';

const App = () => (
  <div className="App">
    <Provider>
      <Layout>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </Provider>
  </div>
);

export default App;
