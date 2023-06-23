import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../redux/books/booksSlice';
import BookItem from './bookItem';
import '../styles/bookList.css';

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  const isLoading = useSelector((state) => state.books.isLoading);
  const error = useSelector((state) => state.books.error);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <BookItem books={books} key={books.id} />
    </div>
  );
};

export default BookList;
