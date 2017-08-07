let mongoose = require('mongoose');
let initStudio = require('../models/Studio');
let config = require('../config.json');
const Studio = mongoose.model('Studio');

function setConnection(){
    mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`, {useMongoClient: true});
}

function getStudio(id){
    return Studio.find({id: id});
}

function createStudio(data){
    const studio = new Studio({
		id: data.id,
        title: data.title,
    	description: data.description,
    	phone: data.phone,
    	address: data.address,
    	email: data.email,
    	logo: data.logo,
    	rating: data.rating,
    	tags: data.tags,
    	messages: data.messages,
    	orders: data.orders
    });

    return studio.save();
}

function deleteStudio(id){
    return Studio.findById(id).remove();
}


module.exports = {
    setConnection: setConnection,
    getStudio: getStudio,
    createStudio: createStudio,
    deleteStudio: deleteStudio
}
