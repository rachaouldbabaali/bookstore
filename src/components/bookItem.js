/* eslint-disable react/jsx-key */
/* eslint-disable prefer-const */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook, fetchBooks } from '../redux/books/booksSlice';

const BookItem = ({ books }) => {
  const dispatch = useDispatch();

  const handleRemoveBook = async (e) => {
    e.preventDefault();
    console.log(e.target.id);
    try {
      dispatch(removeBook(e.target.id));
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
    dispatch(fetchBooks());
  };

  return (
    <div className="book-item-wrap">
      {books.map((book) => (
        <div className="book-details">
          <div className="book-item__title">{book.title}</div>
          <div className="book-item__category">{book.category}</div>
          <div className="book-item__author">{book.author}</div>
          <div className="book-details-btns">
            <button type="button" className="book-item__comment">
              Comments
            </button>
            <button
              type="submit"
              className="book-item__remove"
              id={book.id}
              onClick={handleRemoveBook}
            >
              Remove
            </button>
            <button type="button" className="book-item__edit">
              Edit
            </button>
          </div>
        </div>
      ))}
      <div className="book-item__status">
        <div className="Oval-2" />
        <div className="status-data">
          <span className="status-data__title">64%</span>
          <span className="status-data__completed">Completed</span>
        </div>
      </div>
      <div className="book-item__progress">
        <div className="progress-title">CURRENT CHAPTER</div>
        <div className="progress-details">Chapter 17</div>
        <button type="button" className="progress-update">
          UPDATE PROGRESS
        </button>
      </div>
    </div>
  );
};

export default BookItem;
