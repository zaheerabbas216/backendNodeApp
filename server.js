require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const AuthRoutes = require("./Routes/Auth.route");
const UserRoutes = require("./Routes/User.route");
const AddressRoutes = require("./Routes/Address.route");
const CurrencyRoutes = require("./Routes/Currency.route");
const { verifyAccessToken } = require("./helpers/jwt_helper");

const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//mongoose connection
mongoose
  .connect(
    "mongodb+srv://ZaheerDBUser:zahir%40216@cluster0.gnt9x.mongodb.net/?retryWrites=true&w=majority",
    {
      dbName: "AuthDB",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then((res) => {
    app.listen(process.env.PORT || 4000, () => {
      console.log("========> app starterd success <============");
    });
  })
  .catch((err) => {
    console.log("err in connection", err);
  });
app.get("/", (req, res) => {
  res.send(" hello pong");
});
app.use("/auth", AuthRoutes);
app.use("/user", verifyAccessToken, UserRoutes);
app.use("/address", verifyAccessToken, AddressRoutes);
app.use("/currency", CurrencyRoutes);
