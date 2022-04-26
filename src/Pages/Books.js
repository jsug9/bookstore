import React from 'react';
import styles from './Books.module.scss';
import AddBook from '../components/AddBook';
import Book from '../components/Book';

const Books = () => (
  <div className={styles.books}>
    <div className={styles.bookList}>
      <h2>Books Section</h2>
      <Book title="Book" author="Author" />
    </div>
    <AddBook />
  </div>
);

export default Books;
