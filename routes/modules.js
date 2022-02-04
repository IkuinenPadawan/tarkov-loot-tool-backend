const express = require('express');
const router = express.Router();
const Module = require('../models/Module');

router.get('/', async (req, res) => {
  try {
    const modules = await Module.find();
    res.json(modules);
  } catch (err) {
    res.json({ message: err });
  }
});

// SPECIFIC MODULE
router.get('/:moduleId', async (req, res) => {
  try {
    const module = await Module.find({ id: req.params.moduleId }, { _id: 0 });
    res.json(module);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
