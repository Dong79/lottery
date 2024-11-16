const Item = require('../models/ItemModel');

const getItems = async (req, res) => {
    try {
        const items = await Item.find();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching items', error });
    }
};

const createItem = async (req, res) => {
    try {
        const { name, weight } = req.body;
        if (!name) return res.status(400).json({ message: 'Name is required' });

        const newItem = new Item({ name, weight });
        await newItem.save();
        res.status(201).json(newItem);
    } catch (error) {
        res.status(500).json({ message: 'Error creating item', error });
    }
};

const deleteItem = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedItem = await Item.findByIdAndDelete(id);
        if (!deletedItem) return res.status(404).json({ message: 'Item not found' });

        res.status(200).json(deletedItem);
    } catch (error) {
        res.status(500).json({ message: 'Error deleting item', error });
    }
};

module.exports = {
    getItems,
    createItem,
    deleteItem
};
