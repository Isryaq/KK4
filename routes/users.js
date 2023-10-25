const express = require('express')
const router = express.Router()
const controller = require('../controllers/user')

router.get('/users', controller.get)

router.post('/user', controller.post)

router.put('/user/:id', controller.put)

router.delete('/user/:id', controller.del)

module.exports = router