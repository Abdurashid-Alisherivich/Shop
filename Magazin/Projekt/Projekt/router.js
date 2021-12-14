const express = require('express');

const router = express.Router();

const clientRouter = require('./client/client.router');
router.use('/client', clientRouter);

const productRouter = require('./Rasm_joylash/product/product.router');
router.use('/product', productRouter);

const orderRouter = require('./order_back/order.router');
router.use('/order', orderRouter);

const cantactRouter=require('./contact/cantact.router')
router.use('/contact',cantactRouter);




module.exports = router;