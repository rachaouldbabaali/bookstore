import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
    'Economy',
    'Mystery',
    'Thriller',
    'Literary Fiction',
    'Romance',
    'Poetry',
    'Comedy',
    'Drama',
    'Fantasy',
    'Adventure',
    'Crime',
    'Music',
    'Art',
    'Self Help',
    'Travel',
    'Religion',
    'Spirituality',
    'Science',
    'Math',
  ],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkCategory: (state, action) => Boolean(state.categories.includes(action.payload)),
  },
});

export const { checkCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;
