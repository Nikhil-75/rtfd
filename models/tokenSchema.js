const mongoose = require("mongoose");
const { Schema } = mongoose;
const TokenSchema = new mongoose.Schema({
    user_Id: {
        type: Schema.Types.ObjectId,
        ref: "UserSchema",
        _id: {
            type: String
        },
        access_token: {
            type: String,
            required: true,
        },
        expireAt: {
            type: Date,
            default: Date.now,
            index: { expires: 10 },

        },
    }
});

const access_token = mongoose.model('access_token', TokenSchema);
module.exports = { access_token }
