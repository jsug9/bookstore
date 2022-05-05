import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import React from 'react';

import Navbar from './components/Navbar';
import Categories from './Pages/Categories';
import BooksContainer from './Pages/BooksContainer';

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <div className="App">
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<BooksContainer />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  </Router>
);

export default App;
