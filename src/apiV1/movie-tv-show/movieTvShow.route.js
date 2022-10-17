const express = require("express");
const controller = require("./movieTvShow.controller");
const authenticate = require("./../../middleware/authenticate");

const movieTvShow = express.Router();

movieTvShow.post("/movie_tv_show", authenticate, controller.createMovieTvShow);
movieTvShow.get("/movie_tv_shows", controller.getMovieTvShows);
movieTvShow.get("/movie_tv_show/:id", controller.getMovieTvShow);
movieTvShow.put(
	"/movie_tv_show/:id",
	authenticate,
	controller.updateMovieTvShow
);
movieTvShow.delete(
	"/movie_tv_show/:id",
	authenticate,
	controller.deleteMovieTvShow
);

module.exports = movieTvShow;
