const Authentication = require('./controllers/authentication')
const passportService = require('./services/passport')

const requireAuth = passportService.authenticate('jwt', { session: false })
const requireSignin = passportService.authenticate('local', { session: false })

const allowedOrigin = ['*']

module.exports = (app) => {
  app.get('/api/hello', (req, res) => {
    res.header('Access-Control-Allow-Origin', ...allowedOrigin)
    res.send({ express: 'Hello From Express' })
  })
  app.post('/signin', requireSignin, Authentication.signin)
  app.post('/signup', Authentication.signup)
  app.get('/', requireAuth, (req, res) => {
    res.send({ status: 'athenticated' })
  })
}
