const postRoutes = require('express').Router();
const knex = require('../db/knex')

postRoutes.get('/posts', (req, res) => {
    knex.select()
        .from('posts')
        .then(posts => res.send(posts))
});

postRoutes.get('/post/:slug', (req, res) => {
    knex.select()
        .from('posts')
        .where('slug', req.params.slug)
        .then(post => res.send(post))
});

module.exports = postRoutes;
