const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const initialState = [];

const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});
const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const booksReducer = ((state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((payload) => payload !== action.payload);
    default:
      return state;
  }
});

export { addBook, removeBook };
export default booksReducer;
