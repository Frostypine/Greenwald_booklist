// src/actions/books.js

import * as api from '../api/index';
import { addBooks, getBook } from '../state/bookSlice';
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