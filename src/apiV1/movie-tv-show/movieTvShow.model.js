const movieTvShowDoc = require("./movieTvShow.schema");

class MovieTvShow {
	getMovieTvShowById(id) {
		return movieTvShowDoc.findById(id);
	}

	getMovieTvShow(query) {
		return movieTvShowDoc.findOne(query);
	}

	getMovieTvShows(query) {
		return movieTvShowDoc.find(query);
	}

	createMovieTvShow(data) {
		const movieTvShow = new movieTvShowDoc(data);
		return movieTvShow.save();
	}

	updateMovieTvShow(id, data) {
		return movieTvShowDoc.findByIdAndUpdate(id, data, {
			new: true,
		});
	}

	deleteMovieTvShow(id) {
		return movieTvShowDoc.findByIdAndRemove(id);
	}
}

const movieTvShow = new MovieTvShow();
module.exports = movieTvShow;
