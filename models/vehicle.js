// Load the required packages
var mongoose = require('mongoose');
require('./vehiclecategory.js');

// Define the vehicle schema
var vehicleSchema = new mongoose.Schema({
	license_plate: {
		type: String,
		required: true,
		unique: true
	},
	chassis_number: {
		type: String,
		required: true,
		unique: true
	},
	category: mongoose.model('VehicleCategory').schema,
	customer: mongoose.model('Customer').schema,
	description: String,
	model_type: String,
	brand: String,
	remarks: String,
	keuring_sequence,
	keuring: {
		sequence: Number
	},
	tacho: {
		sequence: Number
	},
	details: [{
		name: String,
		detail_value: Schema.Types.Mixed,
		value_type: String
	}],
	is_active: {
		type: Boolean,
		default: true
	},
	date_created: { 
		type: Date, 
		default: Date.now 
	},
});

// Exports the mongoose model
module.exports = mongoose.model('Vehicle', vehicleSchema);