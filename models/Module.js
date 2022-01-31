const mongoose = require('mongoose');

const LevelItemSchema = mongoose.Schema({
  id: Number,
  amount: Number,
});

const LevelSchema = mongoose.Schema({
  completed: Boolean,
  items: [LevelItemSchema],
});

const ModuleLevelsSubSchema = mongoose.Schema({
  levelOne: {
    type: LevelSchema,
    required: false,
  },
  levelTwo: {
    type: LevelSchema,
    required: false,
  },
  leveThree: {
    type: LevelSchema,
    required: false,
  },
});

const ModuleSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  moduleName: {
    type: String,
    required: true,
  },
  moduleLevels: {
    ModuleLevelsSubSchema,
  },
});

module.exports = mongoose.model('Module', ModuleSchema, 'modules');
