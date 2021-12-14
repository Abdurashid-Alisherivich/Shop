const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({

    clientId: {
        type: String,
        required: true
    },
    products: [
        {
            title: String,
            price: Number,
            amount: Number
        }
    ],
    totalPrice: {
        type: Number,
        required: true
    },
    time: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('orderModel', orderSchema)