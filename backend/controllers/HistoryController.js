const History = require('../models/HistoryModel');

const getHistory = async (req, res) => {
    try {
        const history = await History.find().sort({ timestamp: -1 });
        res.status(200).json(history);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching history', error });
    }
};

module.exports = { getHistory };
