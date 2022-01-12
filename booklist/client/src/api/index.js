import axios from 'axios'; 

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const testGet = () => API.get('/test/get'); 
export const testPost = () => API.post('/test/post');

export const getBooks = () => API.get("/books/get"); 
export const addBook = () => (book) => API.post("/books/post", book); 
export const axios_updateBook = (id, bookEdit) => API.patch(`books/${id}`, bookEdit); 
export const axios_deleteBook = (id) => API.delete(`books/`)