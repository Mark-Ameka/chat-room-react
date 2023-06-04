const { Router } = require('express')
const { createUser, login, getUser } = require('./controllers/user.controller')
const { requireAuth } = require('./middlewares/auth')
const router = Router()

router.get('/', (req, res) => res.sendStatus(200))

router.get('/users', requireAuth, getUser)
router.post('/users', createUser)
router.post('/users/login', login)

router.get('/home', requireAuth, (req, res) => res.sendStatus(200))

module.exports = router