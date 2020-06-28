import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Index from './pages/Index';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Index />} />
      </Switch>
    </Router>
  );
}

export default App;
