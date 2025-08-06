const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const recipeRoutes = require('./routes/router');

app.use(cors());
app.use(express.json());
app.use('/', recipeRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(process.env.PORT, () => {
      console.log(`Server running on PORT ${process.env.PORT}`);
    });
  })
  .catch((err) => console.log('DB connection error:', err));
