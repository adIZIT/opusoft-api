// Load the required packages
var mongoose = require('mongoose');

// Define the status schema
var vehicleCategorySchema = new mongoose.Schema({
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
	}
});

// Exports the status model
module.exports = mongoose.model('VehicleCategory', vehicleCategorySchema);