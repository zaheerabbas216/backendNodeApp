const createError = require("http-errors");
const Address = require("../Models/Address.model");
const User = require("../Models/User.model");

module.exports = {
  addDetailedAddress: async (req, res, next) => {
    try {
      let _detAddr = new Address({
        user_id: req.body.user_id,
        pin: req.body.pin,
        state: req.body.state,
      });

      const address = new Address(_detAddr);
      const savedAddr = await address.save();
      res.send(savedAddr);
    } catch (error) {
      next(error);
    }
  },

  listAllDetailedAddr: (req, res, next) => {
    Address.find((err, doc) => {
      if (!err) {
        res.send(doc);
      } else {
        console.log("error while getting the detailed address");
      }
    });
  },

  getDetailedAddress: (req, res, next) => {
    try {
      Address.findOne({ user_id: req.params.id }, (err, doc) => {
        if (!err) {
          res.send(doc);
        } else {
          console.log("Error while getting the document!");
        }
      });
    } catch (error) {
      next(error);
    }
  },

  getFullAddress: (req, res, next) => {
    try {
      User.aggregate([
        {
          $lookup: {
            from: "addresses",
            localField: "_id",
            foreignField: "user_id",
            as: "detailAddr",
          },
        },
      ])
        .then((result) => {
          res.send(result);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      next(error);
    }
  },
};
