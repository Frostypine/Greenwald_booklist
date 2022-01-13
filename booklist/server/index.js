// server/index.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'; 
import bookRoutes from './routes/books.js'; 
import testRoutes from './routes/test.js';

const app = express();
const PORT = '5000'; 
  
  // set up middle wares 
  app.use(express.json());
  app.use(express.urlencoded());
  app.use(cors());

 //socket
 import {Server} from 'socket.io'; 
 import {createServer} from 'http'; 
 const httpServer = createServer(app); 
 const io = new Server(httpServer, {
    cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
 }); 
 
 io.on("connection", (socket) => {
   console.log("user connected");
 })

  //set up route
  app.use('/books', bookRoutes);
  app.use('/test', testRoutes);

  //set up mongodb connection 
const CONNECTION_URL = 'mongodb://localhost:27017/booklist'; 
  mongoose.connect(CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)))
  .catch((err) => console.log(err.message));