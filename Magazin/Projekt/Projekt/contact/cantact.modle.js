const mongoose = require('mongoose');
const cantactSchema = mongoose.Schema({
    name: String,
    surname: String,
    number: String,
    mag_name: String,
    message: String,
    vaqti:String
})


const cantactModel = mongoose.model('contactModel', cantactSchema);



module.exports=cantactModel;