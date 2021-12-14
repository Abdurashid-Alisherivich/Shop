const express = require('express')
const router = express.Router()

const cantactController = require('./cantact.controller')

//http://localhost:5000/client  get
router.route('/').get(cantactController.getCantact)

//http://localhost:5000/client  post
router.route('/').post(cantactController.addClient)


//http://localhost:5000/client  delete
router.route('/:client_id').delete(cantactController.deleteClient)
module.exports = router;