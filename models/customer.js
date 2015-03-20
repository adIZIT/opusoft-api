// Load the required packages
var mongoose = require('mongoose');

// Define the customer schema
var customerSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: true
	},
	is_active: {
		type: Boolean,
		default: true
	},
	date_created: { 
		type: Date, 
		default: Date.now 
	},
	telephone: String,
	fax: String,
	email: String,
	btw: String,
	gsm: String,
	remarks: String,
	address: {
		street: String,
		number: String,
		city: String,
		zip: String
	}
});

// Exports the mongoose model
module.exports = mongoose.model('Customer', customerSchema);