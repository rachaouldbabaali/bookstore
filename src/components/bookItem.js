import PropTypes from 'prop-types';

const BookItem = ({ book }) => (
  <div className="book-item">
    <div className="book-item__title">{JSON.parse(book).title}</div>
    <div className="book-item__author">{JSON.parse(book).author}</div>
    <button type="button" className="book-item__remove" id={JSON.parse(book).id}>Remove</button>
  </div>
);

BookItem.propTypes = {
  book: PropTypes.string.isRequired,
};

export default BookItem;
