import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Book.module.scss';
import { removeBook } from '../redux/books/books';

const BookItem = (props) => {
  const { book } = props;
  const dispatch = useDispatch();

  const removeBookAction = (book) => {
    dispatch(removeBook(book));
  };

  return (
    <li className={styles.book}>
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <button type="button" className={styles.removeButton} onClick={() => removeBookAction(book.id)}>Remove</button>
    </li>
  );
};

BookItem.propTypes = {
  book: PropTypes.node.isRequired,
};

export default BookItem;
