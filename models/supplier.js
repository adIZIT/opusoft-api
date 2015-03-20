// Load the required packages
var mongoose = require('mongoose');

// Define the supplier schema
var supplierSchema = new mongoose.Schema({
	name: {
		type: String,
		unique: true,
		required: true
	},
	btw: String,
	telephone: String,
	fax: String,
	email: String,
	address: {
		street: String,
		number: String,
		city: String,
		zip: String
	}
});