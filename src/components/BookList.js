import React from 'react';
import PropTypes from 'prop-types';
import BookItem from './BookItem';
import styles from './BookList.module.scss';

const BookList = (props) => {
  const { books } = props;

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

BookList.propTypes = {
  books: PropTypes.node.isRequired,
};

export default BookList;
