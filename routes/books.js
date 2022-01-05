// routes/books.js

import {getBooks, addBook} from '../controllers/books.js'

//set up router get and router post

const router = express.Router();

//router.get('/', getBooks);

router.get('/', getBooks, (req, res) => {
    res.send("getBooks displayed");
    console.log('successful getBooks')
  });

router.post('/', addBook, (req, res) => {
    res.send("addBook displayed");
    console.log('book successfully added')
  });



export default router;