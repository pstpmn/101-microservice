// index.js
const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World Service A !')
})

app.listen(8080, '0.0.0.0', () => console.log('Server is up and running'));