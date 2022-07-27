const express = require("express");

const router = express.Router();

const AddressController = require("../Controllers/Address.controller");

router.get("/getAddress", AddressController.getFullAddress);
router.post("/add-detailed-address", AddressController.addDetailedAddress);
router.get("/get-all-detailed", AddressController.listAllDetailedAddr);
router.get("/:id", AddressController.getDetailedAddress);

module.exports = router;
