//import variables from .env file 
require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//create new app using express
const app = express();

// Connect to MongoDB and set up messages for when 
// Mongo connects successfully or errors out
mongoose.connect(process.env.MONGODB_URI); //mongodb://localhost/idea-board
const connection = mongoose.connection;

connection.on('connected', () => {
  console.log('Mongoose Connected Successfully');    
}); 

// If the connection throws an error
connection.on('error', (err) => {
  console.log('Mongoose default connection error: ' + err);
}); 

app.use(bodyParser.json());
app.get('/', (req,res) => {
  res.send('Hello world!')
})

// Inject middleware
app.use(express.static(`${__dirname}/client/build`))
app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)
})


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Magic happening on port " + PORT);
})