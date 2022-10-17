require("dotenv").config();

const config = {
	default: {
		PORT: process.env.PORT || "3000",
		DATABASE_URL: process.env.DATABASE_URL,
		JWT_ENCRYPTION: process.env.JWT_ENCRYPTION || "jwt_please_change",
		JWT_EXPIRATION: process.env.JWT_EXPIRATION || "1h",
		SALT_ROUNDS: process.env.SALT_ROUNDS || 10,
	},
};

module.exports = config.default;
