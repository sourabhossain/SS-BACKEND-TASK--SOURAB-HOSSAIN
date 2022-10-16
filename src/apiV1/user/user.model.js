const userDoc = require("./user.schema");

class User {
	getUserById(id) {
		return userDoc.findById(id);
	}

	getUser(query) {
		return userDoc.findOne(query);
	}

	getUsers(query) {
		return userDoc.find(query);
	}

	createUser(data) {
		const user = new userDoc(data);
		return user.save();
	}

	updateUser(id, data) {
		return userDoc.findByIdAndUpdate(id, data, {
			new: true,
		});
	}

	deleteUser(id) {
		return userDoc.findByIdAndRemove(id);
	}
}

const user = new User();
module.exports = user;
