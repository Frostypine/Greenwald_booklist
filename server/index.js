// server/index.js

import express from 'express';

const app = express();
const PORT = '5000'; 

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