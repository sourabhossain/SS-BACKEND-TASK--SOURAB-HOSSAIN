const user = require("./user.service");

module.exports = class User {
	createUser(req) {
		const data = { ...req.body, ...req.params };
		return user.createUser(data);
	}

	async updateUser(req) {
		const model = await this.getUser(req);
		return user.updateUser(model, req.body);
	}

	async getUsers(req) {
		const users = await user.getUsers(req.query);
		return { count: users.length, rows: users };
	}

	async getUser(req) {
		req.params._id = req.params.id;
		delete req.params.id;
		req.query = { ...req.query, ...req.params };
		return user.getUser(req.query);
	}

	deleteUser(req) {
		return user.deleteUser({ _id: req?.params?.id });
	}
};
