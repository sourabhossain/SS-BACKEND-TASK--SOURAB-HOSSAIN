const express = require("express");
const controller = require("./movieTvShow.controller");

const movieTvShow = express.Router();

movieTvShow.post("/movie_tv_show", controller.createMovieTvShow);
movieTvShow.get("/movie_tv_shows", controller.getMovieTvShows);
movieTvShow.get("/movie_tv_show/:id", controller.getMovieTvShow);
movieTvShow.put("/movie_tv_show/:id", controller.updateMovieTvShow);
movieTvShow.delete("/movie_tv_show/:id", controller.deleteMovieTvShow);

module.exports = movieTvShow;
