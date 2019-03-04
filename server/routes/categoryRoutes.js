const categoryRoutes = require('express').Router();
const knex = require('../db/knex')
const bookshelf = require('../bookshelf')

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

categoryRoutes.get('/', (req, res) => {
knex.select()
  .from('categories')
  .then(categories => res.send(categories))
});

categoryRoutes.get('/:slug', (req, res) => {
knex.select()
  .from('categories')
  .where('slug', req.params.slug)
  .then(categories => res.send(categories))
});

categoryRoutes.get('/posts/:slug', (req, res) => {
    Category.forge()
      .where('slug', req.params.slug)
      .fetch({withRelated: ['posts']})
      .then(function(category) {res.send(category.toJSON())})
});



module.exports = categoryRoutes;
