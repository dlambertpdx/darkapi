const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
  origin: true,
  credentials: true
}));

app.use(require('cookie-parser')());
app.use(express.json());

module.exports = app;