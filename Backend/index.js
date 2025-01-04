const connectToMongo = require('./db');
const express = require('express')

connectToMongo();
const app = express()
const port = 3000

// Available routes
app.get('/', (req, res) => {
  res.send('Hello Good!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

