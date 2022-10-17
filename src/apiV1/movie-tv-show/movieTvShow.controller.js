const responseConstant = require("./../../constants/response.constant");
const MovieTvShows = require("./movieTvShow.service");
const errorHandler = require("./../../helpers/errorHandler");

const createMovieTvShow = (req, res) => {
	return new MovieTvShows()
		.createMovieTvShow(req)
		.then((data) => {
			const { message, code } =
				responseConstant.MOVIE_TV_SHOW.CREATION_SUCCEEDED;

			res.status(200).send({
				success: true,
				message,
				code,
				data,
			});
		})
		.catch((errors) => {
			const { message, code } =
				responseConstant.MOVIE_TV_SHOW.CREATION_FAIL;

			res.status(400).send({
				success: false,
				message,
				code,
				errors: errorHandler.errorHttpResponse(errors),
			});
		});
};

const updateMovieTvShow = (req, res) => {
	return new MovieTvShows()
		.updateMovieTvShow(req)
		.then((data) => {
			const { message, code } =
				responseConstant.MOVIE_TV_SHOW.UPDATE_SUCCEEDED;

			res.status(200).send({
				success: true,
				message,
				code,
				data,
			});
		})
		.catch((errors) => {
			const { message, code } =
				responseConstant.MOVIE_TV_SHOW.UPDATE_FAIL;

			res.status(400).send({
				success: false,
				message,
				code,
				errors: errorHandler.errorHttpResponse(errors),
			});
		});
};

const getMovieTvShows = (req, res) => {
	return new MovieTvShows()
		.getMovieTvShows(req)
		.then((data) => {
			const { message, code } =
				responseConstant.MOVIE_TV_SHOW.FETCH_SUCCEEDED;

			res.status(200).send({
				success: true,
				message,
				code,
				data,
			});
		})
		.catch((errors) => {
			const { message, code } = responseConstant.MOVIE_TV_SHOW.FETCH_FAIL;

			res.status(400).send({
				success: false,
				message,
				code,
				errors: errorHandler.errorHttpResponse(errors),
			});
		});
};

const getMovieTvShow = (req, res) => {
	return new MovieTvShows()
		.getMovieTvShow(req)
		.then((data) => {
			const { message, code } =
				responseConstant.MOVIE_TV_SHOW.FETCH_SUCCEEDED;

			res.status(200).send({
				success: true,
				message,
				code,
				data,
			});
		})
		.catch((errors) => {
			const { message, code } = responseConstant.MOVIE_TV_SHOW.FETCH_FAIL;

			res.status(400).send({
				success: false,
				message,
				code,
				errors: errorHandler.errorHttpResponse(errors),
			});
		});
};

const deleteMovieTvShow = (req, res) => {
	return new MovieTvShows()
		.deleteMovieTvShow(req)
		.then((data) => {
			const { message, code } =
				responseConstant.MOVIE_TV_SHOW.DELETE_SUCCEEDED;

			res.status(200).send({
				success: true,
				message,
				code,
				data,
			});
		})
		.catch((errors) => {
			const { message, code } =
				responseConstant.MOVIE_TV_SHOW.DELETE_FAIL;

			res.status(400).send({
				success: false,
				message,
				code,
				errors: errorHandler.errorHttpResponse(errors),
			});
		});
};

module.exports = {
	createMovieTvShow,
	updateMovieTvShow,
	getMovieTvShows,
	getMovieTvShow,
	deleteMovieTvShow,
};
