const mongoose = require('mongoose');

const linkSchema = new mongoose.Schema({
    title: {type: String, default: 'This is my title', required: true},
    description: {type: String, required: true},
    message: {type: String, required: true}
});

module.exports = mongoose.model('Link', linkSchema);