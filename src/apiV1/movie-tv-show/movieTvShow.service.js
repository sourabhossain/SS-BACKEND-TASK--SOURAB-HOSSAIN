const movieTvShow = require("./movieTvShow.model");

module.exports = class MovieTvShows {
	createMovieTvShow(req) {
		const data = { ...req.body, ...req.params };
		return movieTvShow.createMovieTvShow(data);
	}

	async updateMovieTvShow(req) {
		const model = await this.getMovieTvShow(req);
		return movieTvShow.updateMovieTvShow(model, req.body);
	}

	async getMovieTvShows(req) {
		const movieTvShows = await movieTvShow.getMovieTvShows(req.query);
		return { count: movieTvShows.length, rows: movieTvShows };
	}

	async getMovieTvShow(req) {
		req.params._id = req.params.id;
		delete req.params.id;
		req.query = { ...req.query, ...req.params };
		return movieTvShow.getMovieTvShow(req.query);
	}

	deleteMovieTvShow(req) {
		return movieTvShow.deleteMovieTvShow({ _id: req?.params?.id });
	}
};
