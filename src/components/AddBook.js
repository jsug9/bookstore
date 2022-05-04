import { v4 as uuidv4 } from 'uuid';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';
import styles from './AddBook.module.scss';

const AddBook = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formTitle = e.target.title.value;
    const formAuthor = e.target.author.value;

    const newBook = {
      id: uuidv4(),
      title: formTitle,
      author: formAuthor,
    };

    if (formTitle.trim() && formAuthor.trim()) {
      dispatch(addBook(newBook));
      e.target.title.value = '';
      e.target.author.value = '';
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        className="input-text"
        placeholder="Book Title"
        name="title"
        required
      />
      <input
        type="text"
        className="input-text"
        placeholder="Author"
        name="author"
        required
      />
      <button className="input-submit" type="submit">
        ADD BOOK
      </button>
    </form>
  );
};

export default AddBook;
