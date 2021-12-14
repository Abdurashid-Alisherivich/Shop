const express = require('express')
const router = express.Router()

const clientController = require('./client.controller')

//http://localhost:5000/client  get
router.route('/').get(clientController.getClient)

//http://localhost:5000/client  post
router.route('/').post(clientController.addClient)

//http://localhost:5000/client  update
router.route('/:client_id').put(clientController.updateClient)

//http://localhost:5000/client  delete
router.route('/:client_id').delete(clientController.deleteClient)
module.exports = router;