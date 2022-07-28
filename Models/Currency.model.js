const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CurrencySchema = new Schema({
  amount: {
    type: Number,
  },
  type: {
    type: String,
  },
});

const Currency = mongoose.model("currency", CurrencySchema);
module.exports = Currency;
