const httpStatus = require("http-status");

// handle not found errors
const notFound = (req, res, next) => {
	res.status(httpStatus.NOT_FOUND);
	res.json({
		success: false,
		message: "Requested Resource Not Found",
	});
	res.end();
};

// handle internal server errors
const internalServerError = (error, req, res, next) => {
	res.status(error.status || httpStatus.INTERNAL_SERVER_ERROR);
	res.json({
		message: error.message,
		extra: error.extra,
		errors: error,
	});
	res.end();
};

module.exports = { notFound, internalServerError };
