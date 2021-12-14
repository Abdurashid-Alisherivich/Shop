const mongoose = require('mongoose');

const clientSchema = mongoose.Schema({
    name: String,
    shopName: String,
    address: String,
    phoneNumber: String,
    login: String,
    password: String,
    role: {
        type: String,
        default: "user"
    }
});
const clientModel = mongoose.model('clientModel', clientSchema);

module.exports = clientModel;