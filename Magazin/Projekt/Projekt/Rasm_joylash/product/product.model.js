const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name:String,
    title: String,
    price:String,
    category:String,
    imagePath: String
});

module.exports = mongoose.model('productModel' , productSchema);