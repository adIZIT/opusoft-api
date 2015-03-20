// Load the required packages
var mongoose = require('mongoose');
require('./supplier.js');

// Define the item schema
var articleSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: true
	},
	description: String,
	referenceNumber: String,
	quantity: {
		type: Number,
		min: 0
	},
	unit_price: {
		type: Number,
		min: 0
	},
	suppliers: [
		{
			supplier: mongoose.moden('Supplier').schema,
			articleNumber: String
		}
	]
});