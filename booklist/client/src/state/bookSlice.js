import {createSlice} from '@reduxjs/toolkit';
import data from '../data';



export const bookSlice = createSlice ({
    name: 'books',
    initialState: {
      books:  data
    },
    reducers: {
       addBooks: (state, action) => {
        console.log(action.payload); 
        state.books.push(action.payload);    
    },
    getBook: (state, action) => {
      state.book = action.payload
    }
  }



})

export const {addBooks, getBook} = bookSlice.actions; // actions for adding/changing state
export const selectBooks = (state) => state.books.books;// accessing state
export default bookSlice.reducer; // store access 