// routes/books.js
// import controller logic for requests
import express from 'express';

//import controller functions 
import {getBooks, addBook, updateBook, deleteBook} from '../controller/books.js'


const router = express.Router();

//set up router methods 
router.get('/', getBooks);
router.post('/', addBook);
router.patch('/:id', updateBook);
router.delete('/:id', deleteBook);

export default router;






