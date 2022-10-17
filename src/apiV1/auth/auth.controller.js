const responseConstant = require("./../../constants/response.constant");
const Auth = require("./auth.service");
const errorHandler = require("./../../helpers/errorHandler");

const signUp = async (req, res) => {
	return new Auth()
		.signUp(req)
		.then((data) => {
			if (data) {
				const { message, code } = responseConstant.AUTH.LOGIN_SUCCEEDED;

				res.status(200).send({
					success: true,
					message,
					code,
					data,
				});
			} else {
				const { message, code } =
					responseConstant.USER.REFERENCE_NOT_FOUND;

				res.status(404).send({
					success: false,
					message,
					code,
					error: message,
				});
			}
		})
		.catch((errors) => {
			const { message, code } = responseConstant.AUTH.LOGIN_FAILED;

			res.status(500).send({
				success: false,
				message,
				code,
				errors: errorHandler.errorHttpResponse(errors),
			});
		});
};

const signIn = async (req, res) => {
	return new Auth()
		.signIn(req)
		.then((data) => {
			if (data) {
				const { message, code } = responseConstant.AUTH.LOGIN_SUCCEEDED;

				res.status(200).send({
					success: true,
					message,
					code,
					data,
				});
			} else {
				const { message, code } =
					responseConstant.ADMIN.REFERENCE_NOT_FOUND;

				res.status(404).send({
					success: false,
					message,
					code,
					error: message,
				});
			}
		})
		.catch((errors) => {
			const { message, code } = responseConstant.AUTH.REGISTRATION_FAILED;

			res.status(500).send({
				success: false,
				message,
				code,
				errors: errorHandler.errorHttpResponse(errors),
			});
		});
};

module.exports = { signIn, signUp };
