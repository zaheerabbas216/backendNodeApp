const express = require("express");
const router = express.Router();

const CurrencyController = require("../Controllers/Currency.controller");

router.post("/convert", CurrencyController.convertToUSD);

module.exports = router;
