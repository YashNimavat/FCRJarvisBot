const mongoose = require('mongoose');
const { Schema } = mongoose;

const registartionSchema = new Schema({

    name: String,
    address: String,
    phone: String,
    occupation: String,
    birthDate: Date,
    email: String,
    Instagram: String,
    Facebook: String,
    camera: Array,
    lens: String,
    otherEquipment: String,
    reference: String,
    registerDate: Date
    
});

mongoose.model('registration', registartionSchema);