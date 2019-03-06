'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const postRoutes = require('./routes/postRoutes');
const userRoutes = require('./routes/userRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const router = express.Router();
const app = express();

app.use(express.static(path.join(__dirname, '../dist'), router));

if (process.env.NODE_ENV !== 'production'){
  require('dotenv').config();
}

app.use('/json/categories', categoryRoutes);
app.use('/users', userRoutes);
app.use('/json', postRoutes);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('*', (req, res) => res.sendFile(path.resolve('./dist', 'index.html')));

const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';

app.listen(PORT, HOST);
console.log(`Biegam na http://${HOST}:${PORT}`);
