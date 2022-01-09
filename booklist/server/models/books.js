//  models/books.js
import mongoose from 'mongoose';

const bookSchema = mongoose.Schema({
    title: String,
    author: String,
    synopsis: String,
    createdAt: {
        type: Date,
        default: new Date(),

        
    },
});

const Books = mongoose.model('Books', bookSchema);

export default Books;