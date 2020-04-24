const mongoose = require('mongoose');
const { Schema } = mongoose;

const eventRegistrationSchema = new Schema({

    event: String,
    counter: { type: Number, default: 1 }
});


mongoose.model('register', eventRegistrationSchema)