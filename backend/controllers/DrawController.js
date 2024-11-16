const Item = require('../models/ItemModel');
const History = require('../models/HistoryModel');

const draw = async (req, res) => {
    try {
        const items = await Item.find();
        if (items.length === 0) return res.status(400).json({ message: 'No items available for draw' });

        // Generate weighted items
        const weightedItems = items.flatMap(item => Array(item.weight).fill(item.name));
        const randomIndex = Math.floor(Math.random() * weightedItems.length);
        const selectedItem = weightedItems[randomIndex];

        // Save the result in history
        const newHistory = new History({ selected_item: selectedItem });
        await newHistory.save();

        res.status(200).json({ result: selectedItem });
    } catch (error) {
        res.status(500).json({ message: 'Error performing draw', error });
    }
};

module.exports = { draw };
