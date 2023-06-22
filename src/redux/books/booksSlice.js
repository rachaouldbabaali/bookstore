import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/aAHVahSeNRKqDtEIDupk';

export const createApp = createAsyncThunk('books/createApp', async () => {
  const response = await axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/');
  return response;
});

export const fetchBooks = createAsyncThunk('books/fetchBooks', async (book, thunkAPI) => {
  try {
    const resp = await axios.get(`${API_BASE_URL}/books`);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong');
  }
});

export const createBook = createAsyncThunk('books/createBook', async (book) => {
  const response = await axios.post(`${API_BASE_URL}/books}`, book);
  return response;
});

export const removeBook = createAsyncThunk('books/removeBook', async (id) => {
  const response = await axios.delete(`${API_BASE_URL}/books/${id}`);
  delete response.headers;
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
      state.isLoading = true;
    },
    [fetchBooks.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.books = action.payload;
    },
    [fetchBooks.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
    [createBook.pending]: (state) => {
      state.isLoading = true;
    },
    [createBook.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.books.push(action.payload);
    },
    [createBook.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
    [removeBook.pending]: (state) => {
      state.isLoading = true;
    },
    [removeBook.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});

export const { addBook, removeBook: removeBookAction } = booksSlice.actions;

export const booksReducer = booksSlice.reducer;
export default booksSlice.reducer;
