import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import BookItem from './bookItem';

const BooksList = () => {
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const { books, isLoading, error } = useSelector((state) => state.books);
  const categoriesList = useSelector((state) => state.categories.categories);

  const fetchBooks = async () => {
    try {
      const response = await fetch('/api/books');
      if (!response.ok) {
        throw new Error('Failed to fetch books');
      }
      const data = await response.json();
      setFilteredBooks(data);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleFilterChange = (e) => {
    setSelectedCategory(e.target.value);
    if (e.target.value) {
      setFilteredBooks(books.filter((book) => book.category === e.target.value));
    } else {
      setFilteredBooks(books);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>All Books</h1>
      <form onSubmit={(e) => e.preventDefault()} className="filter-form">
        <select value={selectedCategory} onChange={handleFilterChange}>
          <option value="">All Categories</option>
          {categoriesList.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </form>
      {filteredBooks.map((book) => (
        <div key={book.id}>
          <BookItem book={JSON.stringify(book)} />
        </div>
      ))}
    </div>
  );
};

export default BooksList;
