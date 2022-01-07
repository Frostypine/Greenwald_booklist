//controller/books.js
import mongoose from 'mongoose';
import Books from '../models/books.js'; 

// set up the getBooks and addBook exports

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

//POST
export const newBook = async (req, res) =>
{
     const post = req.body;
     const newBooks = new Books ({...post, createdAT: new Date().toISOString() });
     try {
         await newBooks.save(); 
         res.status(201).json(newBooks);
     } catch(e) {
         res.status(409).json({ message: e });
     }
}



export const addBook = async (req, res) => {
    const { id } = req.params;
   

    const { title, author, synopsis } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No book with id: ${id}`);

   
    const updatedBooks = { title, author, synopsis, _id: id };


    await Books.findByIdAndUpdate(id, updatedBooks, { new: true });

    res.json(updatedBooks);
}



// export const removeBook = async (req, res) => {
//     const { id } = req.params;

//     if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No book with id: ${id}`);

//     await Books.findByIdAndRemove(id);

//     res.json({ message: "book removed successfully." });
// }