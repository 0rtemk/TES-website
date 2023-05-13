const Router = require('express')
const router = new Router()
const controller = require('../controllers/EventsController')
const { check } = require('express-validator')

router.post(
  '/createEvent',
  [check('event_name', 'Название мероприятия слишком маленькое').isLength({ min: 5}),
   check('event_info', 'Описание мероприятия не может быть пустым').notEmpty(),
   check('event_direction', 'Направление мероприятия не может быть пустым').notEmpty(),
   check('event_skills', 'Навыки мероприятия не могут быть пустыми').notEmpty(),
   check('event_start', 'Дата начала мероприятия не может быть пустой').notEmpty(),
   check('event_finish', 'Дата конца мероприятия не может быть пустой').notEmpty(),
  ],
  controller.createEvent
)

router.post(
  '/updateEvent',
  [check('event_name', 'Название мероприятия слишком маленькое').isLength({ min: 5}),
   check('event_info', 'Описание мероприятия не может быть пустым').notEmpty(),
   check('event_direction', 'Направление мероприятия не может быть пустым').notEmpty(),
   check('event_skills', 'Навыки мероприятия не могут быть пустыми').notEmpty(),
   check('event_start', 'Дата начала мероприятия не может быть пустой').notEmpty(),
   check('event_finish', 'Дата конца мероприятия не может быть пустой').notEmpty(),
  ],
  controller.updateEvent
)

router.post('/deleteEvent', controller.deleteEvent)

router.get('/allEvents', controller.GetAllEvents)

module.exports = router
