const express = require('express')
const router = express.Router()
const {createUser , findUser, findUserById, findUserByIdandUpdate, findUserByIdandDelete}= require('../controller/controller')

router.post('/user', createUser)
router.get('/user', findUser)
router.get('/user/:id', findUserById)
router.patch('/user/:id', findUserByIdandUpdate)
router.delete('/user/:id', findUserByIdandDelete)


module.exports = router