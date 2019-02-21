'use strict';

const bodyParser = require('body-parser')
const express = require('express')
const path = require('path')
const knex = require('./db/knex')
const bookshelf = require('./bookshelf')
const router = express.Router();
const app = express()


app.use(express.static(path.join(__dirname, '/dist'), router));

if (process.env.NODE_ENV !== 'production'){
  require('dotenv').config()
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const User = bookshelf.Model.extend({
  tableName: 'users',
  hasTimestamps: true,
}, {
    byEmail: function(email) {
      return this.forge().query({where: {email: email}}).fetch();
    }
});

app.get('/users', (req, res) => {
  knex.select()
      .from('users')
      .then(users => res.send(users))  
});

app.get('/users/:id', (req, res) => {
  knex.select()
      .from('users')
      .where('id', req.params.id)
      .then(users => res.send(users))  
});

app.get('/posts', (req, res) => {
  knex.select()
      .from('posts')
      .then(posts => res.send(posts))
});

app.get('/json/post/:slug', (req, res) => {
  knex.select()
      .from('posts')
      .where('slug', req.params.slug)
      .then(post => res.send(post))
});

app.get('*', (req, res) => res.sendFile(path.resolve('./dist', 'index.html')));

const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';

app.listen(PORT, HOST);
console.log(`Biegam na http://${HOST}:${PORT}`);