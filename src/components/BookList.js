import React from 'react';
import { useSelector } from 'react-redux';
import BookItem from './BookItem';
import styles from './BookList.module.scss';

const BookList = () => {
  const books = useSelector((state) => state.books);

  return (
    <ul className={styles.bookList}>
      {books.map((book) => (
        <BookItem
          key={book.id}
          book={book}
        />
      ))}
    </ul>
  );
};

export default BookList;
