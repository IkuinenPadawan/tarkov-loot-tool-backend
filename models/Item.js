const mongoose = require('mongoose');

const ItemSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('data', ItemSchema, 'items');
