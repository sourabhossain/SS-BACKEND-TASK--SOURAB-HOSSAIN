const { Schema, model } = require("mongoose");

const movieTvShowSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
			trim: true,
		},
		description: {
			type: String,
			trim: true,
		},
		subtitles: {
			type: String,
			trim: true,
		},
		type: {
			type: String,
			trim: true,
			enum: ["MOVIE", "TV-SHOW"],
			required: true,
			default: "MOVIE",
		},
		starring: [
			{
				type: String,
				required: true,
				trim: true,
			},
		],
		duration: {
			hours: {
				type: Number,
				default: 0,
			},
			minutes: {
				type: Number,
				default: 0,
			},
			seconds: {
				type: Number,
				default: 0,
			},
		},
		releaseDate: {
			type: Date,
			required: true,
		},
		directors: [
			{
				type: String,
				required: true,
				trim: true,
			},
		],
		producer: [
			{
				type: String,
				required: true,
				trim: true,
			},
		],
	},
	{ timestamps: true, minimize: false }
);

const MovieTvShow = model("MovieTvShow", movieTvShowSchema);

module.exports = MovieTvShow;
