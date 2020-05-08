const express = require('express');
const routes = express.Router();

const UserController = require('./controllers/UserController');


routes.get('/', (req, res) => {
    return res.json({Título: 'Teste'})
});

routes.get('/users', UserController.index);

module.exports = routes;

