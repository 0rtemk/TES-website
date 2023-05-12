const News = require('../models/News')
const { validationResult } = require('express-validator')

class NewsController {
  async createNews(req, res) {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res
          .status(400)
          .json({ message: 'Ошибка при созданий новости', errors })
      }
      const { news_name, news_info, news_tags } = req.body
      const news = new News({
        news_name,
        news_info,
        news_tags,
      })
      await news.save()
      return res.json({ message: 'Новость успешно создана' })
    } catch (error) {
      console.log(error)
      res.status(400).json({ message: 'Create news error' })
    }
  }
  async updateNews(req, res) {
    try {
      const { news_name, news_info, news_tags } = req.body

      const news = await News.findOneAndUpdate(
        { news_name: news_name },
        req.body,
        {
          new: true,
          runValidators: true,
          //overwrite: true, убирает все элементы не описанные в теле
        }
      )
      if (!news) {
        return res
          .status(404)
          .json({ msg: `Нет новостей с таким названием: ${news_name}` })
      }

      res.status(200).json({ news })
    } catch (error) {
      res.status(500).json({ msg: error })
    }
  }
  async deleteNews(req, res) {
    try {
      const { news_name } = req.body
      const news = await News.findOneAndDelete({ news_name: news_name })
      if (!news) {
        return res
          .status(404)
          .json({ msg: `Нет новостей с таким названием: ${news_name}` })
      }
      return res.json({ message: 'Новость успешно удалена' })
    } catch (error) {
      console.log(error)
    }
  }
  async allNews(req, res) {
    try {
      const news = await News.find()
      return res.json(news)
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = new NewsController()
