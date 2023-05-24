const { Router } = require('express')
const { createUser } = require('./controllers/user.controller')

const router = Router()

router.get('/', (req, res) => res.sendStatus(200))
router.post('/users', createUser)

module.exports = router