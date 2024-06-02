const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
  res.send('Hello World!');
});

app.listen(8033,()=>{
    console.log("Server is running on port 8033");
});