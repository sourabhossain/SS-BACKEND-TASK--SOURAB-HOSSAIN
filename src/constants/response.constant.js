const responseConstant = {
	COMMON: {
		API_NOTFOUND: {
			message: "API not found",
			code: "1000",
		},
		UNKNOWN_ERROR: {
			message: "Unknown errors",
			code: "1001",
		},
	},
	AUTH: {
		REGISTRATION_FAILED: {
			message: "Registration failed",
			code: "2000",
		},
		LOGIN_SUCCEEDED: {
			message: "Login Successfully",
			code: "1101",
		},
		LOGIN_FAILED: {
			message: "Login Failed",
			code: "1102",
		},
		USERNAME_INVALID: {
			message: "Username is invalid",
			code: "1103",
		},
		PASSWORD_INVALID: {
			message: "Password is invalid",
			code: "1104",
		},
		UNAUTHORIZED: {
			message: "You are not authorized to access this resource",
			code: "1105",
		},
	},
	USER: {
		CREATION_SUCCEEDED: {
			message: "User creation succeeded.",
			code: "1201",
		},
		CREATION_FAIL: {
			message: "User creation failed.",
			code: "1202",
		},
		UPDATE_SUCCEEDED: {
			message: "User update succeeded.",
			code: "1203",
		},
		UPDATE_FAIL: {
			message: "User update failed.",
			code: "1203",
		},
		REFERENCE_NOT_FOUND: {
			message: "User reference not found.",
			code: "1204",
		},
		FETCH_SUCCEEDED: {
			message: "User fetch succeeded.",
			code: "1205",
		},
		FETCH_FAIL: {
			message: "User fetch failed.",
			code: "1206",
		},
		DELETE_SUCCEEDED: {
			message: "User delete succeeded.",
			code: "1207",
		},
		DELETE_FAIL: {
			message: "User delete failed.",
			code: "1208",
		},
	},
};

module.exports = responseConstant;
