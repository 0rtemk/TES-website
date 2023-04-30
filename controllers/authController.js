const User = require('../models/User')
const Role = require('../models/Role')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { validationResult } = require('express-validator')
const { secret } = require('../config')

const generateAccessToken = (id, role_on_site) => {
  const payload = {
    id,
    role_on_site,
  }
  return jwt.sign(payload, secret, { expiresIn: '24h' })
}

class authController {
  async registration(req, res) {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res
          .status(400)
          .json({ message: 'Ошибка при регистрации', errors })
      }
      const {
        login,
        password,
        //fullname, phone, email, projects
      } = req.body
      const candidate = await User.findOne({ login })
      if (candidate) {
        return res
          .status(400)
          .json({ message: 'Пользователь с таким логином уже существует' })
      }
      const hashPassword = bcrypt.hashSync(password, 7)
      //const userRole = await Role.findOne({ role_on_site: 'USER' })
      //const userRole = 'USER'
      const user = new User({
        login,
        password: hashPassword,
        // fullname,
        // phone,
        // email,
        // projects,
        //  role_on_site: userRole,
      })
      await user.save()
      return res.json({ message: 'Пользователь успешно зарегистрирован' })
    } catch (error) {
      console.log(error)
      res.status(400).json({ message: 'Registration error' })
    }
  }
  async login(req, res) {
    try {
      const { login, password } = req.body
      const user = await User.findOne({ login })
      if (!user) {
        return res
          .status(400)
          .json({ message: `Пользователь ${login} не найден` })
      }
      const validPassword = bcrypt.compareSync(password, user.password)
      if (!validPassword) {
        return res.status(400).json({ message: `Введён неверный пароль` })
      }
      const token = generateAccessToken(user._id, user.role_on_site)
      const role = user.role_on_site
      const fullname = user.fullname
      const phone = user.phone
      const email = user.email
      const projects = user.projects
      return res.json({ token, role, login, fullname, phone, email, projects })
    } catch (error) {
      console.log(error)
      res.status(400).json({ message: 'Login error' })
    }
  }
  async getUsers(req, res) {
    try {
      const users = await User.find()
      res.json(users)
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = new authController()
