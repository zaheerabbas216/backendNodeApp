const createError = require("http-errors");
const Currency = require("../Models/Currency.model");
module.exports = {
  convertToUSD: (req, res, next) => {
    let amount_ = req.body.amount;
    var x = amount_ * 0.013;
    let _curr = new Currency({
      amount: x,
      type: req.body.type,
    });
    _curr.save();
    res.send(_curr);
  },
};
