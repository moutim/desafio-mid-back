const express = require("express");

const routes = express.Router();

routes.use("/login", require("./login.route"));

module.exports = routes;
