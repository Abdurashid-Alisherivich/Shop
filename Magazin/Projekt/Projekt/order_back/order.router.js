const express = require('express')
const router = express.Router()

const orderController = require('./order.controller') 

//http://localhost:5000/order           Get
router.route('/').get(orderController.getOrder)

//http://localhost:5000/order           Post
router.route('/').post(orderController.addOrder)

//http://localhost:5000/order           Post
// router.route('/check').post(orderController.checkOrder)

//http://localhost:5000/order             Put
// router.route('/:id').put(orderController.updateOrder)

//http://localhost:5000/order           Delete
// router.route('/:id').delete(orderController.deleteOrder)

//http://localhost:5000/order           getId
// router.route('/:id').get(orderController.getElementByIdOrder)

module.exports = router