const MovieTvShows = require("./movieTvShow.service");
const errorHandler = require("./../../helpers/errorHandler");

const createMovieTvShow = (req, res) => {
	return new MovieTvShows()
		.createMovieTvShow(req)
		.then((MovieTvShow) => {
			res.status(200).send({
				success: true,
				message: "MovieTvShow creation succeeded.",
				data: MovieTvShow,
			});
		})
		.catch((errors) => {
			res.status(400).send({
				success: false,
				message: "MovieTvShow creation failed.",
				errors: errorHandler.errorHttpResponse(errors),
			});
		});
};

const updateMovieTvShow = (req, res) => {
	return new MovieTvShows()
		.updateMovieTvShow(req)
		.then((MovieTvShow) => {
			res.status(200).send({
				success: true,
				message: "MovieTvShow update succeeded.",
				data: MovieTvShow,
			});
		})
		.catch((errors) => {
			res.status(400).send({
				success: false,
				message: "MovieTvShow update failed.",
				errors: errorHandler.errorHttpResponse(errors),
			});
		});
};

const getMovieTvShows = (req, res) => {
	return new MovieTvShows()
		.getMovieTvShows(req)
		.then((movieTvShows) => {
			res.status(200).send({
				success: true,
				message: "MovieTvShows fetch succeeded.",
				data: movieTvShows,
			});
		})
		.catch((errors) => {
			res.status(400).send({
				success: false,
				message: "MovieTvShows fetch failed.",
				errors: errorHandler.errorHttpResponse(errors),
			});
		});
};

const getMovieTvShow = (req, res) => {
	return new MovieTvShows()
		.getMovieTvShow(req)
		.then((movieTvShow) => {
			res.status(200).send({
				success: true,
				message: "MovieTvShow fetch succeeded.",
				data: movieTvShow,
			});
		})
		.catch((errors) => {
			res.status(400).send({
				success: false,
				message: "MovieTvShow fetch failed.",
				errors: errorHandler.errorHttpResponse(errors),
			});
		});
};

const deleteMovieTvShow = (req, res) => {
	return new MovieTvShows()
		.deleteMovieTvShow(req)
		.then((deleted) => {
			res.status(200).send({
				success: true,
				message: "MovieTvShow delete succeeded.",
				data: deleted,
			});
		})
		.catch((errors) => {
			res.status(400).send({
				success: false,
				message: "MovieTvShow delete failed.",
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
