import React from 'react';
import AddBook from '../components/AddBook';
import BookList from '../components/BookList';

const BooksContainer = () => (
  <div className="booksContainer">
    <BookList />
    <hr />
    <AddBook />
  </div>
);

export default BooksContainer;
