const config = require("./../config/config");
const jwt = require("jwt-then");
const user = require("./../apiV1/user/user.model");
const responseConstant = require("./../constants/response.constant");

const authenticate = async (req, res, next) => {
	try {
		let token = req.headers.authorization;

		if (!token) {
			const { message, code } = responseConstant.AUTH.UNAUTHORIZED;

			res.status(401).send({
				success: false,
				message,
				code,
			});
		}

		token = token.split(" ")[1];

		const decode = await jwt.verify(token, config.JWT_ENCRYPTION);
		const model = await user.getUser({ username: decode?.username });

		if (!model || !model?.isAdmin) {
			const { message, code } = responseConstant.AUTH.UNAUTHORIZED;

			res.status(400).send({
				success: false,
				message,
				code,
			});
		}

		req.token = decode;
		next();
	} catch (error) {
		next(error);
	}
};

module.exports = authenticate;
