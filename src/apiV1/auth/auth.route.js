const express = require("express");
const controller = require("./auth.controller");

const auth = express.Router();

auth.post("/signup", controller.signUp);
auth.post("/signin", controller.signIn);

module.exports = auth;
