const passport = require('passport')
const User = require('../models/user.js')
const { secret } = require('../config')
const JwtStrategy = require('passport-jwt').Strategy
const { ExtractJwt } = require('passport-jwt')
const LocalStrategy = require('passport-local')

// Setup LocalLogin Strategy
// by default the local strategy looks for a username field, but it can be changed
const localOptions = { usernameField: 'email' }
const localLogin = new LocalStrategy(localOptions, (email, password, done) => {
  // Verify email and password, call done with the user if it is the correct
  // email and password, else call done with false
  User.findOne({ email }, (err, user) => {
    if (err) {
      done(err)
      return
    }
    if (!user) {
      done(null, false)
      return
    }
    // compare supplied password with the stored hashed password
    user.comparePassword(password, (err1, isMatch) => {
      if (err1) {
        done(err1)
        return
      }
      if (!isMatch) {
        done(null, false)
        return
      }
      done(null, user)
    })
  })
})
const jwtOptions = {
  // tell JwtStrategy where the jwt is located in the request
  // because it could be anywhere (body, header, query param!..)
  // here we say that the jwt must be in the header under the authorization key
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: secret,
}

// create JwtStrategy
const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
  // Payload is the decoded Jwt object which contains sub and iat
  // We need to check if the ID (sub) exists in our database
  // if it does we call done with it, else we call done without it
  User.findById(payload.sub, (err, user) => {
    if (err) {
      done(err)
      return
    }
    if (user) {
      done(null, user)
    } else {
      done(null, false)
    }
  })
})

passport.use(jwtLogin)
passport.use(localLogin)

module.exports = passport
