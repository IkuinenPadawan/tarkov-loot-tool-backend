const mongoose = require('mongoose');

const SubSchema = mongoose.Schema({
  id: Number,
  amount: Number,
});

const QuestSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  questName: {
    type: String,
    required: true,
  },
  questGiver: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  level: {
    type: Number,
    required: true,
  },
  items: [SubSchema],
});

module.exports = mongoose.model('Quest', QuestSchema, 'quests');
