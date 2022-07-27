const mongoose = require("mongoose");
const User = require("./User.model");
const Schema = mongoose.Schema;

const AddressSchema = new Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
  },
  pin: {
    type: Number,
  },
  state: {
    type: String,
  },
});

const Address = mongoose.model("address", AddressSchema);
module.exports = Address;
