require('dotenv').config();
const express = require('express');
const app = express();
const router = require('./app/router');
const path = require('path');

app.use(express.static('integration'));

app.set('view engine', 'ejs');
const viewsDirectory = path.join(__dirname, 'app/views');
// console.log(__dirname);
// console.log(path.join(__dirname, 'test'));
// console.log(viewsDirectory);
app.set('views', viewsDirectory);

app.use(router);

app.listen(process.env.PORT, () =>
    console.log(`Listening on ${process.env.BASE_URL}:${process.env.PORT}`)
);