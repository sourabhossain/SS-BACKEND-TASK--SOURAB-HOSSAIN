const express = require("express");
const auth = require("./auth/auth.route");
const movieTvShow = require("./movie-tv-show/movieTvShow.route");

const router = express.Router();

router.use("/", auth);
router.use("/", movieTvShow);

module.exports = router;
