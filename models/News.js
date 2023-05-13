const { Schema, model } = require('mongoose');


const NewsSchema = new Schema({
  news_name: {
    type: String,
    required: true,
  },
  news_info: {
    type: String,
    required: true,
  },
  news_tags: Array,
  news_date: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  photo_news: String,
})

module.exports = model('News', NewsSchema)
