const express = require('express')
const app = express()
const tasks = require('./routes/authRoutes')
const connectDB = require('./db/connect')
const authRouter = require('./routes/authRoutes')
const newsRouter = require('./routes/newsRoutes')

const port = process.env.PORT || 5000
const cors = require('cors')
require('dotenv').config()

app.use(express.json())
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
)

app.use('/auth', authRouter)
app.use('/news', newsRouter)

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`server is listening port ${port}...,`))
  } catch (error) {
    console.log(error)
  }
}

start()
