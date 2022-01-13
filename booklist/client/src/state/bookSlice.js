import {createSlice} from '@reduxjs/toolkit';
//import data from '../data';

export const bookSlice = createSlice ({
    name: 'bookList',
    initialState: {
      bookList: []
     // books:  data
    },
    reducers: {
    getBooks: (state, action) => {
      state.bookList = action.payload;
    },
    addBook: (state, action) => {
        console.log(action.payload); 
        state.bookList.push(action.payload);    
    },
    redux_updateBook: (state, action) => {
      state.bookList = state.bookList.map((book) => (book.id === action.payload ? action.payload: book));  
    }, 
    axios_deleteBook: (state, action) => {
      state.bookList = state.bookList.filter((book) => book._id !== action.payload)
    }
  }



})

export const {addBook, getBooks, redux_updateBook, axios_deleteBook } = bookSlice.actions; // actions for adding/changing state
export const selectBook = (state) => state.booksList.bookList;// accessing state
export default bookSlice.reducer; // store access 