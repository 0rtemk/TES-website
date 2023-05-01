const { Schema, model } = require('mongoose')

const EventSchema = new Schema({
    event_name: {
        type: String,
        required: true,
    },
    event_info: {
        type: String,
        required: true,
    },
    event_direction: {
        type: String,
        required: true,
    },
    event_tags:  Array,
    event_skills: {
        type: Array,
        required: true,
    },
    event_start: {
        type: Date,
        required: true,
    },
    event_finish: {
        type: Date,
        required: true,
    },
    event_imageURL: String
})

module.exports = model('Event', EventSchema)