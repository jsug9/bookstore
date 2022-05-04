const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const key = '99xxkSoFZQy4K4RxzPqC';
const URL = baseURL + key;

const fetchBooks = async () => {
  const result = await fetch(URL);
  const data = await result.json();
  return data;
};
