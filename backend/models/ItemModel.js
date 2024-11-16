const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    weight: { type: Number, default: 1 }
});

module.exports = mongoose.model('Item', ItemSchema);
