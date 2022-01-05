import {createSlice} from '@reduxjs/toolkit';
import data from '../booklist/data';

let books =[];
let storedBooks = JSON.parse(localStorage.getItem("storedBooks"));
if (storedBooks) Books = storedBooks; 
if(!books) {
books = data; 
  localStorage.setItem("books", JSON.stringify(books))
}

export const bookSlice = createSlice ({
    name: 'books',
    initialState: {
      books:   books
    },
    reducers: {
       addBooks: (state, action) => {
        console.log(action.payload); 
        state.books = action.payload;
        localStorage.setItem('storedBooks', JSON.stringify(state.books));
    },
    deleteBooks: (state,action) => {
      state.books.splice(action.payload, 1)
      localStorage.setItem("storedBooks",JSON.stringify(state.books))
    }
  }
})

export const {addBooks,deleteBooks} = bookSlice.actions;
export const selectBooks = (state) => state.books.books;
export default bookSlice.reducer; 