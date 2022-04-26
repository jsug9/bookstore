import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import React from 'react';

import Navbar from './components/Navbar';
import Categories from './Pages/Categories';
import BooksContainer from './Pages/BooksContainer';

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <BooksContainer />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
