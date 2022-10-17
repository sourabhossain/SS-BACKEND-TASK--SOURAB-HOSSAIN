const config = require("./../config/config");
const jwt = require("jwt-then");
const user = require("./../apiV1/user/user.model");

const authenticate = async (req, res, next) => {
	try {
		let token = req.headers.authorization;

		if (!token) {
			return res.status(401).json({
				message: "Unauthorize user",
			});
		}

		token = token.split(" ")[1];

		const decode = await jwt.verify(token, config.JWT_ENCRYPTION);
		const model = await user.getUser({ username: decode?.username });

		if (!model || !model?.isAdmin) {
			return res.status(400).json({
				message: "Unauthorize user",
			});
		}

		req.user = decode;
		next();
	} catch (error) {
		next(error);
	}
};

module.exports = authenticate;
