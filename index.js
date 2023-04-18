const express = require('express')
const app = express()
const tasks = require('./routes/authRoutes')
//const mongoose = require('mongoose')
const connectDB = require('./db/connect')
const authRouter = require('./routes/authRoutes')
const port = process.env.PORT || 5000
require('dotenv').config()

app.use(express.json())
app.use('/auth', authRouter)

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`server is listening port ${port}...,`))
  } catch (error) {
    console.log(error)
  }
}

start()
//   const doc = new UserModel({
//     login: req.body.login,
//     password: req.body.password,
//     fullname: req.body.fullname,
//     date_birth: req.body.date_birth,
//     phone: req.body.phone,
//     email: req.body.email,
//     role_in_project: req.body.role_in_project,
//     role_on_site: req.body.role_on_site,
//   })
//   const user = doc.save()

//   res.json(user)
// })

// app.listen(4444, (err) => {
//   if (err) {
//     return console.log(err)
//   }

//   console.log('Server OK')
// })
