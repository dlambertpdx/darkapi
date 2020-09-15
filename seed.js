require('dotenv').config(); 
require('./lib/utils/connect')(); 
const scrapeData = require('./scrapers/infoScraper'); 
const Character = require('./lib/Models/Character');
const mongoose = require('mongoose');

scrapeData()
  .then(characters => Character.create(characters))
  .finally(() => mongoose.connection.close());