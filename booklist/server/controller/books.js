//controller/books.js
import mongoose from 'mongoose';
import Books from '../models/books.js'; 

//GET 
export const getBooks = async (req, res) => 
{
    try{
        const books = await Books.find();
        res.status(200).json(books);
    }catch(e) {
        res.status(404).json({message: e }); 
    }
}



//
export const addBook = async (req, res) =>
{
     const book = req.body;

     const newBooks = new Books ({...book, createdAt: new Date().toISOString() });
     console.log(newBooks)
    
     try {
         await newBooks.save(); 
         res.status(201).json(newBooks);
     } catch(e) {
         res.status(409).json({ message: e });
     }
}

export const updateBook =  async (req, res) => {
const {id} = req.params;
const {author, title, synopsis} = req.body;

if(!mongoose.Types.ObjectId.isVal(id)){
    return res.status(404).send(`no post with id ${id}`);
}
const updatedBook = {author, title, synopsis, _id: id}
await Books.findByIdAndUpdate(id, updatedBook, {new: true}); 
res.json(updatedBook);
}




export const deleteBook = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) 
    {
        return res.status(404).send(`No book with id: ${id}`);
    }

    await Books.findByIdAndDelete(id); // delete vs remove? 
    res.json({ message: "book removed successfully." });
}