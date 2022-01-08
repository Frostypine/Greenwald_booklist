// routes/books.js
// import controller logic for requests
import express from 'express';

//import controller functions 
import {getBooks, addBook} from '../controllers/books.js'

// import {getBooks, addBook, newBook, removeBook} from '../controllers/books.js'router get and router post

const router = express.Router();

//set up router methods 
router.get('/', getBooks);
router.post('/', addBook);
// router.patch('/:id',newBook);
// router.delete('/:id',removeBook);

export default router;




// router.get('/', getBooks, (req, res) => {
//     res.send("getBooks displayed");
//     console.log('successful getBooks')
//   });

// router.post('/', addBook, (req, res) => {
//     res.send("addBook displayed");
//     console.log('book successfully added')
//   });



