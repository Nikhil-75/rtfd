const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const {Schema}  = mongoose;

let salt = 10;

const registerSchema = new mongoose.Schema({

  username: { type: String, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true, minLength: 6 },
  confirm_Password: { type: String, required: true }
});

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

//password encryption using bcrypt

registerSchema.pre("save", function (next) {
  var user = this;

  if (!user.isModified("password")) return next();
  bcrypt.genSalt(salt, function (err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

registerSchema.methods.comparePassword = function (userPassword, callback) {
  bcrypt.compare(userPassword, this.password, function (err, isMatch) {
    if (err) return callback(err);
    callback(null, isMatch);
  });
};
const UserData = mongoose.model('Registers', registerSchema);
const UserAddress = mongoose.model('UserAddress', addressSchema);

module.exports = { UserData,UserAddress }