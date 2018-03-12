/* eslint-disable no-console */
const express = require('express')
const path = require('path')

const port = process.env.PORT || 5000
const app = express()
const development = process.env.NODE_ENV !== 'production'

if (development) {
  app.get('/api/hello', (req, res) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080')
    res.send({ express: 'Hello From Express' })
  })

  console.log('Development express server running..')
} else {
  app.use(express.static(path.join(__dirname, '../app/dist')))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../app/dist/index.html'))
  })
}

app.listen(port, () => console.log(`Listening on port ${port}`))
