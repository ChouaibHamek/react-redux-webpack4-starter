const Authentication = require('./controllers/authentication')
const passportService = require('./services/passport')

const requireAuth = passportService.authenticate('jwt', { session: false })
const requireSignin = passportService.authenticate('local', { session: false })

module.exports = (app) => {
  app.get('/api/hello', (req, res) => {
    res.json({ express: 'Hello From Express' })
  })
  app.post('/signin', requireSignin, Authentication.signin)
  app.post('/signup', Authentication.signup)
  app.get('/', requireAuth, (req, res) => {
    res.send({ status: 'athenticated' })
  })
}
