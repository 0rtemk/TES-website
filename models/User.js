const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
  login: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role_in_project: String,
  role_on_site: String,
  fullname: {
    type: String,
    required: true,
  },
  date_birth: {
    type: Date,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  projects: Array,
})

//module.exports = ('User', UserSchema)
