const express = require('express');
const ejs = require('ejs');
const app = express();
const PORT = 3000;

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/home', (req, res) => {
  res.render('index');
});

app.listen(PORT, () => {
  console.log(`Connected on ${PORT}`);
});



