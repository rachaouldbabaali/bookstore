import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { fetchBooks, createBook, addBook } from '../redux/books/booksSlice';
import '../styles/AddBook.css';

const AddBook = () => {
  const { categories } = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const handleAddBook = async (e) => {
    e.preventDefault();
    const newBook = {
      item_id: uuidv4(),
      title,
      category,
      author,
    };

    try {
      const response = await fetch(
        'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/aAHVahSeNRKqDtEIDupk/books',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newBook),
        },
      );

      if (!response.ok) {
        throw new Error('Failed to add book');
      }

      const data = await response.json();

      dispatch(addBook(data));
      dispatch(createBook(data));
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
    dispatch(fetchBooks());
    setTitle('');
    setCategory('');
    setAuthor('');
  };

  return (
    <>
      <div className="Line" />
      <span className="add-book-title">ADD NEW BOOK</span>
      <form className="add-book-form">
        <input
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Book title"
          value={title}
          className="title-input"
        />
        <select
          value={category}
          className="categories-select"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <input
          onChange={(e) => setAuthor(e.target.value)}
          type="name"
          placeholder="Author"
          className="author-input"
          value={author}
        />
        <button type="button" className="add-book-btn" onClick={handleAddBook}>
          Add Book
        </button>
      </form>
    </>
  );
};

export default AddBook;
