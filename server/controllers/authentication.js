const jwt = require('jwt-simple')
const User = require('../models/user')
const { secret } = require('../config')

const tokenForUser = user =>
  jwt.encode({ sub: user.id, iat: new Date().getTime() }, secret)

exports.signup = (req, res, next) => {
  const { email, password } = req.body
  if (!email || !password) {
    res.status(422).send({ error: 'Email or password not provided' })
  }
  User.findOne({ email }, (err, existingUser) => {
    // Ensure that no error has been returned by the database operation
    if (err) {
      next(err)
      return
    }

    // Check if the email is use, and return corresponding error
    if (existingUser) {
      res.status(422).send({ error: 'Email is in use' })
      return
    }

    // Create and save user instance
    const user = new User({
      email,
      password,
    })
    user.save((err1) => {
      if (err1) {
        next(err1)
        return
      }
      res.json({ token: tokenForUser(user) })
    })
  })
}

exports.signin = (req, res) => {
  // user's creds are verified, we just need to give them a token
  res.json({ token: tokenForUser(req.user) })
}
