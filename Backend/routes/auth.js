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

// If there are errors, return bad request request and the erorrs.
async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
}


// Check whetehr the user with this email exists or not.
let user = user.findOne({ email: req.body.email });
user = await user.create({
    name: req.body.name,
    password: req.body.password,
    email: req.body.email
})

module.exports = Router
