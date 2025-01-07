const express = require('express');
const Router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');

Router.post('/', [
    body('name').isLength({ min: 3 }),
    body('email').isEmail(),
    body('password').isLength({ min: 5 }),
], (res, req) => {
    console.log(req.body);
    const user = User(req.body);
    user.save();
    res.send("Hello");
})

module.exports = Router
