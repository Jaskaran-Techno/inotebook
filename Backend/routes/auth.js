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

// Create a User using: POST "/api/auth/createuser". No login required
router.post('/createuser', [
  body('name', 'Enter a valid name').isLength({ min: 3 }),
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),
], async (req, res) => {
  // If there are errors, return Bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  // Check whether the user with this email exists already
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ error: "Sorry a user with this email already exists" })
    }
    // Create a new user
    user = await User.create({
      name: req.body.name,
      password: req.body.password,
      email: req.body.email,
    })
    res.json(user)
    
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some Error occured");
  }
})

// creating Salt
const salt = bcrypt.genSalt(10);

// If there are errors, return bad request request and the erorrs.
//async (req, res) => {
//    const errors = validationResult(req);
//    if (!errors.isEmpty()) {
//        return res.status(400).json({ errors: errors.array() });
//    }
//}


// Check whetehr the user with this email exists or not.
 //let user = user.findOne({ email: req.body.email });
 //user = await user.create({
 //   name: req.body.name,
 //   password: req.body.password,
 //   email: req.body.email
 //})

module.exports = Router
