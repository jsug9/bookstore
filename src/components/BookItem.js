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
    <li className="bookItem">
      <div className="leftSide">
        <p className="bookCategory">{book.category}</p>
        <h3 className="bookTitle">{book.title}</h3>
        <p className="bookAuthor">{book.author}</p>
        <div className="bookButtons">
          <button
            type="button"
            className="bookButton"
          >
            Comments
          </button>
          <button
            type="button"
            className="bookButton"
            onClick={() => removeBookAction(book.id)}
          >
            Remove
          </button>
          <button
            type="button"
            className="bookButton"
          >
            Edit
          </button>
        </div>
      </div>

      <div className="middleSide">
        Middle
      </div>

      <div className="rightSide">
        <p className="currentChapter">CURRENT CHAPTER</p>
        <p className="chapter">Chapter 17</p>
        <button className="updateProgress" type="button">UPDATE PROGRESS</button>
      </div>
    </li>
  );
};

BookItem.propTypes = {
  book: PropTypes.exact({
    id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};

export default BookItem;
