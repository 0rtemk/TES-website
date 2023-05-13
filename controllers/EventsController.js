const Event = require('../models/Event')
const { validationResult } = require('express-validator')

class EventsController {
    async createEvent(req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res
                  .status(400)
                  .json({ message: 'Ошибка при созданий мероприятий', errors })
            }
            const { event_name, event_info, event_direction, event_tags,  event_skills, event_start, event_finish, event_imageURL } = req.body
            const event = new Event({
                event_name,
                event_info,
                event_direction,
                event_tags,
                event_skills,
                event_start,
                event_finish,
                event_imageURL
            })
            await event.save()
            return res.json({ message: 'Мероприятие успешно создано' })

        } catch (err) {
            console.log(error)
            res.status(400).json({ message: 'Create event error' })
        }

    } 
    async updateEvent(req, res) {
        try {
          const { _id,event_name, event_info, event_direction, event_tags,  event_skills, event_start, event_finish, event_imageURL } = req.body
    
          const event = await Event.findOneAndUpdate(
            { _id: _id },
            req.body,
            {
              new: true,
              runValidators: true,             
            }
          )
          if (!event) {
            return res
              .status(404)
              .json({ msg: `Нет мероприятия с таким идентификатором: ${_id}` })
          }
    
          res.status(200).json({ event })
        } catch (error) {
          res.status(500).json({ msg: error })
        }
      }
      async deleteEvent(req, res) {
        try {
          const { _id } = req.body
          const event = await Event.findOneAndDelete({ _id: _id })
          if (!event) {
            return res
              .status(404)
              .json({ msg: `Нет мероприятия с таким названием: ${event_name}` })
          }
          return res.json({ message: 'Мероприятие было успешно удалено' })
        } catch (error) {
          console.log(error)
        }
      }
      async GetAllEvents(req, res) {
        try {
          const events = await Event.find()
          res.json(events)
        } catch (error) {
          console.log(error)
        }
      }

}
module.exports = new EventsController()