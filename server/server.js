'use strict';

const bodyParser = require('body-parser')
const express = require('express')
const path = require('path')
const knex = require('./db/knex')
const bookshelf = require('./bookshelf')
const router = express.Router();
const app = express()


app.use(express.static(path.join(__dirname, '../dist'), router));

if (process.env.NODE_ENV !== 'production'){
  require('dotenv').config()
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// const Post = bookshelf.Model.extend({
//   tableName: 'posts',
//   hasTimestamps: true,
// }, {
//     byCategoryId: function(category_id) {
//       return this.forge().query({where: {category_id: category_id}}).fetch();
//     }
// });

// Post.byCategoryId('4').then(p => console.log('Tytuły posta:', p.get('title')))

var Category = bookshelf.Model.extend({  
  tableName: 'categories',
  posts: function() {
    return this.hasMany(Post);
  }
});

var Post = bookshelf.Model.extend({  
  tableName: 'posts',

  categories: function() {
      return this.belongsTo(Category);
  },
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

app.get('/posts/categories/:slug', (req, res) => {

      Category.forge().where('slug', req.params.slug).fetch({withRelated: ['posts']}).then(function(category) {
        res.send(category.toJSON())
      })
});

app.get('/json/post/:slug', (req, res) => {
  knex.select()
      .from('posts')
      .where('slug', req.params.slug)
      .then(post => res.send(post))
});


app.get('/categories', (req, res) => {
  knex.select()
    .from('categories')
    .then(categories => res.send(categories))
});

app.get('/categories/:slug', (req, res) => {
  knex.select()
    .from('categories')
    .where('slug', req.params.slug)
    .then(categories => res.send(categories))
});

app.get('*', (req, res) => res.sendFile(path.resolve('./dist', 'index.html')));

const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';

app.listen(PORT, HOST);
console.log(`Biegam na http://${HOST}:${PORT}`);