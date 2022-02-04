const express = require('express');
const router = express.Router();
const Item = require('../models/Item');

// GET ALL ITEMS
router.get('/', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.json({ message: err });
  }
});

// GET SPECIFIC ITEM
router.get('/:itemId', async (req, res) => {
  try {
    const item = await Item.find({ id: req.params.itemId }, { _id: 0 });
    res.json(item);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
