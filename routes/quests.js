const express = require('express');
const router = express.Router();
const Quest = require('../models/Quest');

router.get('/', async (req, res) => {
  try {
    const quests = await Quest.find();
    res.json(quests);
  } catch (err) {
    res.json({ message: err });
  }
});

// SPECIFIC QUEST
router.get('/:questId', async (req, res) => {
  try {
    const quest = await Quest.find({ id: req.params.questId }, { _id: 0 });
    res.json(quest);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
