const Router = require('express')
const router = new Router()
const controller = require('../controllers/NewsController')
const { check } = require('express-validator')

router.post(
  '/createNews',
  [check('news_name', 'Имя новости не может быть пустым').notEmpty()],
  [check('news_info', 'Описание новости не может быть пустым').notEmpty()],
  controller.createNews
)

router.post(
  '/updateNews',
  [check('news_name', 'Имя новости не может быть пустым').notEmpty()],
  [check('news_info', 'Описание новости не может быть пустым').notEmpty()],
  controller.updateNews
)

router.delete('/deleteNews', controller.deleteNews)

router.get('/allNews', controller.allNews)

module.exports = router
