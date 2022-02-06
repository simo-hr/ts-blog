import express, { urlencoded, json, } from 'express'
import { graphqlHTTP, } from 'express-graphql'
import mongoose from 'mongoose'
import kill from 'kill-port'
import schema from './schemas'
const isDev = process.env.NODE_ENV === 'development'
const app = express()
const PORT = 4000

mongoose.connect(process.env.MONGO_URL)

mongoose.connection.once('open', () => {
  console.log('we are connected.')
})

app.use(urlencoded({ extended: false, }))
app.use(json())

const allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, access_token')

  // intercept OPTIONS method
  if (req.method === 'OPTIONS') {
    res.send(200)
  } else {
    next()
  }
}
app.use(allowCrossDomain)

app.use(
  '/graphql',
  json(),
  graphqlHTTP({
    graphiql: true,
    schema,
  })
)

if (isDev) {
  kill(PORT, 'tcp').then(() => {
    app.listen(PORT, () => {
      console.log('🚀 Listening for requests on port 4000')
    })
  })
} else {
  app.listen(PORT, () => {
    console.log('🚀 Listening for requests on port 4000')
  })
}

export default app
