const userRoutes = require('express').Router();
const knex = require('../db/knex');

userRoutes.get('/', (req, res) => {
    knex.select()
        .from('users')
        .then(users => res.send(users));  
});

userRoutes.get('/:id', (req, res) => {
    knex.select()
        .from('users')
        .where('id', req.params.id)
        .then(user => res.send(user));
});

module.exports = userRoutes;
