const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

// Import routes
const itemsRoute = require('./routes/items');
const questsRoute = require('./routes/quests');
const modulesRoute = require('./routes/modules');

// MIDDLEWARE
app.use('/items', itemsRoute);
app.use('/quests', questsRoute);
app.use('/modules', modulesRoute);

// ROUTES
app.get('/', (req, res) => {
  res.send('We are on home');
});

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, () =>
  console.log('Connected to DB')
);

app.listen(3000);
