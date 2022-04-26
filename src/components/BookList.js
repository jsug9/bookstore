import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';
import styles from './BookList.module.scss';

const BookList = (props) => {
  const { books } = props;

  return (
    <ul className={styles.bookList}>
      {books.map((book) => (
        <Book
          key={book.id}
          book={book}
        />
      ))}
    </ul>
  );
};

BookList.propTypes = {
  books: PropTypes.node.isRequired,
};

export default BookList;
