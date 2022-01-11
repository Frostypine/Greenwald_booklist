// server/index.js

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'; 
import postBooks from './routes/books.js'; 
import testRoutes from './routes/test.js';

const app = express();
const PORT = '5000'; 
  
// app.get('/get', (req, res) => {
//     res.send("get displayed");
//     console.log('successful get')
//   });

//     app.post('/post', (req, res) => {
//     res.send("post saved");
//     console.log('successful post')
//   });

  // app.listen(PORT, () => {
  //   console.log(`server running on http://localhost:${PORT}` )
  // });


  // set up middle wares 
  app.use(express.json({ limit: "30mb", extended: true }));
  app.use(express.urlencoded({ limit: "30mb", extended: true }));
  app.use(cors());

  //set up route
  app.use('/books', postBooks);
  app.use('/test', testRoutes);

  //set up mongodb connection 
  
const CONNECTION_URL = 'mongodb://localhost:27017/booklist'; 
  mongoose.connect(CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)))
  .catch((err) => console.log(err.message));