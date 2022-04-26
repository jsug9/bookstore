import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import React from 'react';

import Navbar from './components/Navbar';
import Categories from './Pages/Categories';
import Books from './Pages/Books';

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Books />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
