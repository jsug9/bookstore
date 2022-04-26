import React from 'react';
import PropTypes from 'prop-types';
import styles from './Book.module.scss';

const Book = (props) => {
  const {
    title, author,
  } = props;

  return (
    <div className={styles.book}>
      <h3>{title}</h3>
      <p>{author}</p>
      <button type="button" className={styles.removeButton}>Remove</button>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
