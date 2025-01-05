const express = require('express');
const Router = express.Router();
const User = require('../models/User');

Router.post('/', (res, req) => {
    console.log(req.body);
    const user = User(req.body);
    user.save();
    res.send("Hello");
})

module.exports = Router
