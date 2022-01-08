// server/index.js

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'; 

import postBooks from './routes/books.js'; 

const app = express();
const PORT = '5000'; 
//const CONNECTION_URL = "mongodb+srv://bambookazooie:mongodbpassword1234@cluster0.5zow7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  
app.get('/get', (req, res) => {
    res.send("get displayed");
    console.log('successful get')
  });

    app.post('/post', (req, res) => {
    res.send("post saved");
    console.log('successful post')
  });

  app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}` )
  });


  // set up middle wares 
  app.use(express.json({ limit: "30mb", extended: true }));
  app.use(express.urlencoded({ limit: "30mb", extended: true }));
  app.use(cors());

  //set up route
  app.use('/books', postBooks);

  //set up mongodb connection 
  // mongoose.connect(CONNECTION_URL)
  // .then(() => app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)))
  // .catch((err) => console.log(err.message));