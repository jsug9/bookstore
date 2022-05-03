const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const initialState = [
  {
    id: 1,
    title: 'Book 1',
    author: 'Author 1',
  },
  {
    id: 2,
    title: 'Book 2',
    author: 'Author 2',
  },
  {
    id: 3,
    title: 'Book 3',
    author: 'Author 3',
  },
];

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
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
});

export { addBook, removeBook };
export default booksReducer;
