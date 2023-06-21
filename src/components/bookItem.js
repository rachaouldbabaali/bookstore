import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const BookItem = ({ book }) => {
  const dispatch = useDispatch();

  return (
    <div className="book-item">
      <div className="book-item__title">{JSON.parse(book).title}</div>
      <div className="book-item__author">{JSON.parse(book).author}</div>
      <button
        type="button"
        className="book-item__remove"
        id={JSON.parse(book).id}
        onClick={(e) => dispatch(removeBook(e.target.id))}
      >
        Remove
      </button>
    </div>
  );
};

BookItem.propTypes = {
  book: PropTypes.string.isRequired,
};

export default BookItem;
