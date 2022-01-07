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
      
    }

  }
})

export const {addBooks} = bookSlice.actions;
export const selectBooks = (state) => state.books.books;
export default bookSlice.reducer; 