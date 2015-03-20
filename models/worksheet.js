// Load the required packages
var mongoose = require('mongoose');
require('./vehicle.js');
require('./status.js');

// Define the worksheet schema
var worksheetSchema = new mongoose.Schema({
	worksheet_number: {
		type: Number,
		unique: true,
		required: true
	}
	work_description: String,
	is_active: {
		type: Boolean,
		default: true
	},
	date_created: { 
		type: Date, 
		default: Date.now 
	},
	start_date: Date,
	end_date: Date,
	status: mongoose.model('Status').schema,
	vehicles: [{
		vehicle: mongoose.model('Vehicle').schema,
		vehicle_details: [{
			name: String,
			detail_value: Schema.Types.Mixed,
			value_type: String
		}]
	}]
});

// Exports the mongoose model
module.exports = mongoose.model('Worksheet', worksheetSchema);