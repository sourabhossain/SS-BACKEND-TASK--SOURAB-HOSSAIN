const express = require("express");
import auth from "./auth/auth.route";

const router = express.Router();

router.use("/", auth);

module.exports = router;
