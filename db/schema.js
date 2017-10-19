const mongoose = require('mongoose')
// First, we instantiate a namespace for our Schema constructor defined by mongoose.
const Schema = mongoose.Schema;

const ideaSchema = new Schema ({
    title: {
        type: String,
        default: 'New Title'
      },
      description: {type: String, default: 'New Idea Description'},
      createdAt: {type: Date, default: Date.now}
})

const userSchema = new Schema ({
    userName: String,
    password: String,
    ideas: [ideaSchema]
})


const Idea = mongoose.model('Idea', ideaSchema)
const User = mongoose.model('User', userSchema)

module.exports = {
  Idea, User
}