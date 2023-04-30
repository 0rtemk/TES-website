const { Schema, model } = require('mongoose')

// Чтобы сделать поле обязательным для заполнения, поменяйте required: false -> required: true

const UserSchema = new Schema({
  login: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role_in_project: String,
  role_on_site: { type: String, default: 'USER' },
  fullname: { type: String, required: false },
  date_birth: { type: Date, required: false, default: Date.now() },
  phone: { type: Number, required: false },
  email: { type: String, required: false },
  projects: Array,
})

module.exports = model('User', UserSchema)
