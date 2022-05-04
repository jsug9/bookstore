const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const key = '99xxkSoFZQy4K4RxzPqC';
const URL = baseURL + key;

const fetchBooks = async () => {
  const result = await fetch(URL);
  const data = await result.json();
  return data;
};

const postBook = async (book) => {
  const response = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: book.id,
      title: book.title,
      author: book.author,
    }),
  });
  const data = await response.text();
  return data;
};

export { fetchBooks, postBook };
