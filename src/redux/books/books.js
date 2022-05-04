import { fetchBooks, postBook, deleteBook } from '../APIcall';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookStore/books/GET_BOOKS ';

const initialState = [];
const sortBooks = (books) => books.sort((a, b) => ((a.title > b.title) ? 1 : -1));

const getBooks = () => async (dispatch) => {
  const result = await fetchBooks();
  const books = Object.entries(result);
  dispatch({
    type: GET_BOOKS,
    payload: sortBooks(books),
  });
};

const addBook = (payload) => async (dispatch) => {
  await postBook(payload);
  dispatch({
    type: ADD_BOOK,
    payload,
  });
};

const removeBook = (payload) => async (dispatch) => {
  await deleteBook(payload);
  dispatch({
    type: REMOVE_BOOK,
    payload,
  });
};

const booksReducer = ((state = initialState, action) => {
  const books = [...state, action.payload];
  switch (action.type) {
    case GET_BOOKS:
      return action.payload;
    case ADD_BOOK:
      return sortBooks(books);
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
});

export { addBook, removeBook, getBooks };
export default booksReducer;
