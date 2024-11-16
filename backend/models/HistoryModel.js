const mongoose = require('mongoose');

const HistorySchema = new mongoose.Schema({
    selected_item: { type: String, required: true },
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('History', HistorySchema);
