import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Topic from './Topic';
import NotFound from './NotFound';

export default (props) => (
  <Router {...props}>
    <div className='container'>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/topic" component={Topic} />
        <Route Component={NotFound} />
      </Switch>
    </div>
  </Router>
);
