//  models/books.js
import mongoose from 'mongoose';

const bookSchema = mongoose.Schema({
    title: String,
    message: String,
    selectedFile: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

const PostMessage = mongoose.model('Books', bookSchema);

export default Books;