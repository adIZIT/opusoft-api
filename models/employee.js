// Load the required packages
var mongoose = require('mongoose');

// Define the employee schema
var employeeSchema = new mongoose.Schema({
	first_name: {
		type: String,
		required: true
	},
	last_name: String,
	username: {
		type: String,
		lowercase: true,
		unique: true,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	is_active: {
		type: Boolean,
		default: true
	},
	date_created: {
		type: Date,
		default: Date.now
	}
});