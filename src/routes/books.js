import BooksList from '../components/bookList';
import AddBook from '../components/addBook';

const books = [
  {
    id: 1,
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
  },
  {
    id: 2,
    title: 'Dune',
    author: 'Frank Herbert',
  },
  {
    id: 3,
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
  },
];
const Books = () => (
  <div>
    <h1>All Books</h1>
    <BooksList books={books} />
    <AddBook />
  </div>
);

export default Books;
