import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { fetchBooks, removeBook } from '../redux/books/booksSlice';

const BookItem = ({ book }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div className="book-item">
      <div className="book-item__title">{book.title}</div>
      <div className="book-item__author">{book.author}</div>
      <button
        type="button"
        className="book-item__remove"
        onClick={() => dispatch(removeBook(book.id))}
      >
        Remove
      </button>
    </div>
  );
};

BookItem.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookItem;
