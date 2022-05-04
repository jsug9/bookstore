const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/99xxkSoFZQy4K4RxzPqC/books';

const fetchBooks = async () => {
  const result = await fetch(baseURL);
  const data = await result.json();
  return data;
};

const postBook = async (book) => {
  const response = await fetch(baseURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: book.id,
      title: book.title,
      author: book.author,
      category: 'General',
    }),
  });
  const data = await response.text();
  return data;
};

const deleteBook = async (id) => {
  const response = await fetch(`${baseURL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
    }),
  });
  const data = await response.text();
  return data;
};

export { fetchBooks, postBook, deleteBook };
