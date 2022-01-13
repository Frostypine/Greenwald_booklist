// src/actions/books.js

import * as api from '../api/index';
import { addBook, getBooks, redux_updateBook, axios_deleteBook } from '../state/bookSlice';
//import data from '../data';

export const retrieveBookList = () => async (dispatch) => {
    try {
        const {data} = await api.getBooks(); 
        dispatch(getBooks(data))
    } catch(error){
        console.log(error); 
    };
};

export const createBookList = (book) => async (dispatch) => {
 try {
     const {data} = await api.addBook(book);
     dispatch(addBook(data))
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

export const deleteBook = (id) => async (dispatch) => {
    try{
        const {data} = await api.axios_deleteBook(id);
        dispatch(axios_deleteBook(data))
    } catch (error) {
        console.log(error)
    }
}