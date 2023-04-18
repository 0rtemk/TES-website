const jwt = require('jsonwebtoken')
const { secret } = require('../config')

module.exports = function (role_on_site) {
  return function (req, res, next) {
    if (req.method === 'OPTIONS') {
      next()
    }

    try {
      const token = req.headers.authorization.split(' ')[1]
      if (!token) {
        return res.status(403).json({ message: 'Пользователь не авторизован' })
      }
      const { role_on_site: userRoles } = jwt.verify(token, secret)
      let hasRole = false
      userRoles.forEach((role) => {
        if (role_on_site.includes(role)) {
          hasRole = true
        }
      })
      if (!hasRole) {
        return res.status(403).json({ message: 'У вас нет доступа' })
      }
      next()
    } catch (error) {
      console.log(error)
      return res
        .status(403)
        .json({ message: `Пользователь не авторизован ${token}` })
    }
  }
}
