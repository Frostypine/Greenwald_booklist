// src/actions/books.js

import * as api from '../api/index';
import { addBooks, getBook, redux_updateBook, redux_removeBook } from '../state/bookSlice';
//import data from '../data';

export const retrieveBookList = () => async (dispatch) => {
    try {
        const {data} = await api.getBooks(); 
        dispatch(getBook(data))
    } catch(error){
        console.log(error); 
    };
};

export const createBookList = (book) => async (dispatch) => {
 try {
     const {data} = await api.addBook(book);
     dispatch(addBooks(data))
 } catch (error){
     console.log(error)
 };   
};


export const editBook = (id, book) => async (dispatch) => {
    try{
        const {data} = await api.axios_updateBook(id, book);
        dispatch(redux_updateBook(data))
    } catch (error) {
        console.log(error)
    }
}

export const removeBook = (id) => async (dispatch) => {
    try{
       await api.axios_deleteBook(id);
        dispatch(redux_updateBook(data))
    } catch (error) {
        console.log(error)
    }
}