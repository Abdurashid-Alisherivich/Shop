const express = require('express');
const router = express.Router()

const productRouter = require('./product.model')

router.use('/product', useUploadFile.single('image'), productRouter);


module.exports = router;