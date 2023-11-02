import { createSlice } from '@reduxjs/toolkit';
import { Itheme } from './types';



const initialState: Itheme = {
  theme: 'white',
};


export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
      changeTheme(state, action) {
      state.theme = action.payload;
    },
  },
});

export const { changeTheme } = themeSlice.actions;


