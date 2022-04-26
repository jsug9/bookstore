import React from 'react';
import styles from './AddBook.module.scss';

const AddBook = () => (
  <form className={styles.form}>
    <input
      type="text"
      className="input-text"
      placeholder="Book Title"
      name="title"
    />
    <input
      type="text"
      className="input-text"
      placeholder="Author"
      name="author"
    />
    <button className="input-submit" type="button">
      ADD BOOK
    </button>
  </form>
);

export default AddBook;
