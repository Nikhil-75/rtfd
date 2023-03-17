const mongoose = require("mongoose");
const  Schema  = mongoose;
const addressSchema = new mongoose.Schema({
    user_id: {
        type: String
    },

    address: { type: String, },

    city: { type: String, required: true, },

    state: { type: String, required: true, },

    pin_code: { type: Number, min: 6, required: true, },

    phone_no: { type: Number, required: true, }

});
const UserAddress = mongoose.model('UserAddress', addressSchema);
module.exports = {UserAddress} 
