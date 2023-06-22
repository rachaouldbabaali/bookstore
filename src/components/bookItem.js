/* eslint-disable prefer-const */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const BookItem = ({ books, item_id }) => {
  const dispatch = useDispatch();

  for (let key in Object.keys(books)) {
    console.log(key[0].title);
  }
  return (
    <div className="book-item-wrap">
      <div className="book-details">
        {console.log(books.item1[0].title)}
        <div className="book-item__title">{}</div>
        <div className="book-item__category">{}</div>
        <div className="book-item__author">{}</div>
        <div className="book-details-btns">
          <button type="button" className="book-item__comment">
            Comments
          </button>
          <button
            type="button"
            className="book-item__remove"
            // eslint-disable-next-line camelcase
            id={item_id}
            onClick={(e) => {
              dispatch(removeBook(e.target.item_id));
            }}
          >
            Remove
          </button>
          <button type="button" className="book-item__edit">
            Edit
          </button>
        </div>
      </div>
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

BookItem.propTypes = {
  books: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
  item_id: PropTypes.number.isRequired,
};

export default BookItem;
