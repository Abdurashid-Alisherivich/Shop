const express = require('express');
const router = express.Router();
const upload = require('../common/middleware');
const ProductController = require('./product.controller');



//http://localhost:5000/user    Get
router.route('/').get(ProductController.getProduct);

//http://localhost:5000/user    Post
router.route('/createProduct').post( upload.single('rasm'), ProductController.addProduct);

//http://localhost:5000/user    Put
router.route('/:productId').put(upload.single('rasm'), ProductController.updateProduct);

//http://localhost:5000/user    Delet
router.route('/:productId').delete(ProductController.deleteProduct);


module.exports = router