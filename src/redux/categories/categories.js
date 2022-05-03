const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

const initialState = [];

const checkStatus = (payload) => ({
  type: CHECK_STATUS,
  payload,
});

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default categoriesReducer;
export { checkStatus };
