const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

const baseURL = process.env.PORT ? 'TBD' : 'http://localhost:3000/';

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
  res.send(
    `Resources: <br> <a href="${baseURL}items">/items</a> <br>  <a href="${baseURL}quests">/quests</a> <br> <a href="${baseURL}modules">/modules</a> <br>`
  );
});

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, () =>
  console.log('Connected to DB')
);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on ${port}...`));

// Graceful exit
process.on('SIGINT', function () {
  console.log('Closing...');
  dbConnection.close();
  process.exit();
});
