const responseConstant = {
	COMMON: {
		API_NOTFOUND: {
			message: "Requested Resource Not Found",
			code: "1000",
		},
		UNKNOWN_ERROR: {
			message: "Unknown errors",
			code: "1001",
		},
	},
	AUTH: {
		REGISTRATION_SUCCEEDED: {
			message: "Registration successfully",
			code: "1100",
		},
		REGISTRATION_FAILED: {
			message: "Registration failed",
			code: "1101",
		},
		LOGIN_SUCCEEDED: {
			message: "Login successfully",
			code: "1102",
		},
		LOGIN_FAILED: {
			message: "Login failed",
			code: "1103",
		},
		USERNAME_INVALID: {
			message: "Username is invalid",
			code: "1104",
		},
		PASSWORD_INVALID: {
			message: "Password is invalid",
			code: "1105",
		},
		UNAUTHORIZED: {
			message: "You are not authorized to access this resource",
			code: "1106",
		},
	},
	MOVIE_TV_SHOW: {
		CREATION_SUCCEEDED: {
			message: "MovieTvShow creation succeeded.",
			code: "1201",
		},
		CREATION_FAIL: {
			message: "MovieTvShow creation failed.",
			code: "1202",
		},
		UPDATE_SUCCEEDED: {
			message: "MovieTvShow update succeeded.",
			code: "1203",
		},
		UPDATE_FAIL: {
			message: "MovieTvShow update failed.",
			code: "1203",
		},
		REFERENCE_NOT_FOUND: {
			message: "MovieTvShow reference not found.",
			code: "1204",
		},
		FETCH_SUCCEEDED: {
			message: "MovieTvShow fetch succeeded.",
			code: "1205",
		},
		FETCH_FAIL: {
			message: "MovieTvShow fetch failed.",
			code: "1206",
		},
		DELETE_SUCCEEDED: {
			message: "MovieTvShow delete succeeded.",
			code: "1207",
		},
		DELETE_FAIL: {
			message: "MovieTvShow delete failed.",
			code: "1208",
		},
	},
};

module.exports = responseConstant;
