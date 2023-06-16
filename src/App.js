import { Routes, Route } from 'react-router-dom';
import Books from './routes/books';
import Categories from './routes/categories';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
