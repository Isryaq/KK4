const express = require('express');
const router = express.Router()
const usercontoller = require('../controllers/user')

router.get('/users', usercontoller.get)

router.get('/users/:id', usercontoller.getid)

router.post('/user', usercontoller.post)

router.put('/user/:id', usercontoller.put)

router.delete('/user/:id', usercontoller.del)

module.exports = router;