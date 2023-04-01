const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 5000;
const path = require('path');
const linkRoute = require('./routes/linkRoutes')

mongoose.connect('mongodb://127.0.0.1:27017/newLinks');

let db = mongoose.connection;

db.once('open', () => {
  console.log('OPEN DB');
})

db.on('error', () => {
  console.log('ERROR IN DB');
})

app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'templates'));

app.use('/', linkRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})