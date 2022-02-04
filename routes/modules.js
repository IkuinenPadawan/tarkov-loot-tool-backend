const express = require('express');
const router = express.Router();
const Module = require('../models/Module');

// GET ALL MODULES
router.get('/', async (req, res) => {
  try {
    const result = await Module.find();
    if (result.length > 0) {
      res.status(200).json(result);
    } else {
      const payload = {
        msg: `No entries found`,
        data: result,
      };
      res.status(404).json(payload);
    }
  } catch (err) {
    res.json({ message: err });
  }
});

// GET SPECIFIC MODULE
router.get('/:id', async (req, res) => {
  try {
    const result = await Module.find({ id: req.params.id }, { _id: 0 });
    if (result.length > 0) {
      res.status(200).json(result);
    } else {
      const payload = {
        msg: `No entry found for id ${req.params.id}`,
        data: result,
      };
      res.status(404).json(payload);
    }
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
