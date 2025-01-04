const express = require('express');
const Router = express.Router();

Router.get('/', (res, req) => {

    res.json([]);
})

module.exports = Router