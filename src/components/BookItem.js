import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';

const BookItem = (props) => {
  const { book } = props;
  const dispatch = useDispatch();

  const removeBookAction = (book) => {
    dispatch(removeBook(book));
  };

  return (
    <li className="book">
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <button type="button" className="removeButton" onClick={() => removeBookAction(book.id)}>Remove</button>
    </li>
  );
};

BookItem.propTypes = {
  book: PropTypes.exact({
    id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
};

export default BookItem;
