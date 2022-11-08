const { Schema, model } = require("mongoose");

const userSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true,
		},
		username: {
			type: String,
			required: true,
			trim: true,
			unique: true,
		},
		password: {
			type: String,
			trim: true,
			required: true,
		},
		isAdmin: {
			type: Boolean,
			default: false,
		},
	},
	{ 
		toJSON: { 
			virtuals: true,
			transform(doc, ret) {
				delete ret.password;
				delete ret.id;
				return ret;
			}
		}
	},
	{ timestamps: true, minimize: false }
);

const User = model("User", userSchema);

module.exports = User;
