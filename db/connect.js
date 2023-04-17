const mongoose = require('mongoose')

const connectDB = (url) => {
  return mongoose.set('strictQuery', false).connect(url, {})
}

module.exports = connectDB

// mongoose
//   .set("strictQuery", false);
//   .connect(ConnectionString)
//   .then(() => console.log('Connected to the DB...'))
//   .catch((err) => console.log(err))
