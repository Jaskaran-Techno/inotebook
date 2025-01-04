const express = require('express');
const Router = express.Router();

Router.get('/', (res, req) => {
    obj = {
        name: 'thios',
        Number: 34
    }
    res.json(obj);
})

module.exports = Router
