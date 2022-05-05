import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import React from 'react';

import Navbar from './components/Navbar';
import CategoriesContainer from './Pages/CategoriesContainer';
import BooksContainer from './Pages/BooksContainer';

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <div className="App">
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<BooksContainer />} />
        <Route path="/categories" element={<CategoriesContainer />} />
      </Routes>
    </div>
  </Router>
);

export default App;
