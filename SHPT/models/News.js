import mongoose from 'mongoose';

const NewsSchema = new mongoose.Schema({
    news_name: {
        type: String,
        required: true
    },
    news_info: {
        type: String,
        required: true
    },
    news_tags: Array,
    news_date: {
        type: Date,
        required: true
    }

});