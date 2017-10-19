require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true})
mongoose.Promise = global.Promise

const { User, Idea } = require('./schema');

const ginger = new Idea ({
    title: 'Make Ginger Beer',
    description: 'forget kids brewing their own beer these days, I want to make ginger beer'
})
const change = new Idea ({
    title: 'Change The World',
    description: 'make a huge impact on lots of people by sharing lots of positivity and love'
})

const ajax = new User({
    userName: 'ay_jaxer',
    password: 'oreolover',
    ideas: [ginger, change]
  })

  User.remove({})
  .then(() => ajax.save())
  .then(() => console.log('Successful Save'))
  .then(() => mongoose.connection.close())