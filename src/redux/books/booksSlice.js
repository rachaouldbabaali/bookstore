import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/aAHVahSeNRKqDtEIDupk';

export const createApp = createAsyncThunk('books/createApp', async () => {
  const response = await axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/');
  return response;
});

export const fetchBooks = createAsyncThunk('books/fetchBooks', async (_, thunkAPI) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/books`);
    let { books } = thunkAPI.getState().books;
    books = response.data;
    return books;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const createBook = createAsyncThunk('books/createBook', async (book) => {
  const response = await axios.post(`${API_BASE_URL}/books}`, book);
  return response;
});

export const removeBook = createAsyncThunk('books/removeBook', async (id) => {
  const response = await axios.delete(`${API_BASE_URL}/books/${id}`);
  return response;
});

export const filterBooks = createAsyncThunk('books/filterBooks', async (category) => {
  const response = await axios.get(`${API_BASE_URL}/books?category=${category}`);
  return response;
});

const initialState = {
  books: [],
  isLoading: false,
  error: undefined,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      state.books = state.books.filter((book) => book.item_id !== action.payload);
    },
  },
  extraReducers: {
    [fetchBooks.pending]: (state) => {
      const newState = state;
      newState.books = [];
      return newState;
    },
    [fetchBooks.fulfilled]: (state, action) => {
      const newState = state;
      newState.books = action.payload;
      return newState;
    },
    [fetchBooks.rejected]: (state, action) => {
      const newState = state;
      newState.books = action.payload;
      return newState;
    },
  },
});

export const { addBook, removeBook: removeBookAction } = booksSlice.actions;

export const booksReducer = booksSlice.reducer;
export default booksSlice.reducer;
