import { createSlice } from "@reduxjs/toolkit";

import { v4 as uuidv4 } from 'uuid';

const initialBooks = {
  books: [
    { id: uuidv4(), title: "Magic Pan ", author: "Alex" },
    { id: uuidv4(), title: "Sleeping bed", author: "Rox" },
    { id: uuidv4(), title: "Talking bird", author: "Flex" },
  ],
};

export const booksSlice = createSlice({
  name: "books",
  initialState: initialBooks,
  reducers: {
    showBooks: (state) => state,
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    updateBook: (state, action) => {
      const { id, title, author } = action.payload
      const bookToUpdate = state.books.filter((book) => book.id == id);

      if (bookToUpdate) {
        bookToUpdate[0].title = title;
        bookToUpdate[0].author = author;
      }
    },

    deleteBook: (state, action) => {
      const id = action.payload;
      state.books = state.books.filter((book) => book.id !== id);
    },
  },
});

export const { showBooks, addBook, deleteBook, updateBook } =
  booksSlice.actions;
export default booksSlice.reducer;
