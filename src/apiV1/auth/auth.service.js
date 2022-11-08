const bcrypt = require("bcrypt");
const jwt = require("jwt-then");
const config = require("./../../config/config");
const responseConstant = require("./../../constants/response.constant");
const User = require("./../user/user.service");
const user = require("./../user/user.model");

class Auth {
	getToken = async (username) => {
		return await jwt.sign({ username }, config.JWT_ENCRYPTION, {
			expiresIn: config.JWT_EXPIRATION,
		});
	};

	signUp = async (req) => {
		const { username, password } = req?.body;
		const model = await user.getUser({ username });

		if (!model) {
			const errors = responseConstant.AUTH.USERNAME_INVALID;
			throw errors;
		}

		const matchPasswords = await bcrypt.compareSync(
			password,
			model.password
		);

		if (!matchPasswords) {
			const errors = responseConstant.AUTH.PASSWORD_INVALID;
			throw errors;
		}

		const token = await this.getToken(username);
		model._doc.password = undefined;

		return {
			...model._doc,
			token,
		};
	};

	signIn = async (req) => {
		req.body.password = await bcrypt.hash(
			req?.body?.password,
			+config.SALT_ROUNDS
		);

		return new User().createUser(req);
	};
}

module.exports = Auth;
