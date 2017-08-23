let mongoose = require('mongoose');

const Schema = mongoose.Schema;

const StudioSchema = new Schema({
	id: {type: Number},
	title: {type: String},
	description: {type: String},
	phone: {type: String},
	address: {type: String},
	email: {type: String},
	logo: {type: String},
	rating: {type: Number},
	tags: {type: Array},
	messages: {type: Array},
	orders: {type: Array}
});

const Studio = mongoose.model('Studio', StudioSchema);
