import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import BookItem from './BookItem';
import styles from './BookList.module.scss';
import { getBooks } from '../redux/books/books';

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  useEffect(() => {
    dispatch(getBooks());
  }, []);

  return (
    <ul className={styles.bookList}>
      {books.map((book) => (
        <BookItem
          key={book[0]}
          book={book[1][0]}
        />
      ))}
    </ul>
  );
};

export default BookList;
