import React from 'react';
import PropTypes from 'prop-types';
import styles from './Book.module.scss';

const BookItem = (props) => {
  const { book } = props;

  return (
    <li className={styles.book}>
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <button type="button" className={styles.removeButton}>Remove</button>
    </li>
  );
};

BookItem.propTypes = {
  book: PropTypes.node.isRequired,
};

export default BookItem;
