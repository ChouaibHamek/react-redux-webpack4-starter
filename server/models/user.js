/* eslint-disable  func-names, no-console */

const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')

const { Schema } = mongoose

// Define the model
const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String,
})

// On save hook, encrypt password
userSchema.pre('save', function (next) {
  const user = this

  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      next(err)
      return
    }

    bcrypt.hash(user.password, salt, null, (err1, hash) => {
      if (err1) {
        next(err1)
        return
      }
      console.log(hash)
      user.password = hash
      next()
    })
  })
})

// Add method to compare passwords
userSchema.methods.comparePassword = function (candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) {
      callback(err, false)
      return
    }
    callback(null, isMatch)
  })
}

// Create the model class
const ModelClass = mongoose.model('user', userSchema)

// Export the model
module.exports = ModelClass
