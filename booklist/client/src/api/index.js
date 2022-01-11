import axios from 'axios'; 

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const testGet = () => API.get('/test/get'); 
export const testPost = () => API.post('/test/post'); 

export const getBooks = () => API.get("/books/get"); 
export const addBook = () => (book) => API.post("/books/post", book); 