const request = require('superagent');
const { parse } = require ('node-html-parser');

const scraper = () => {
  return request
    .get(`https://dark-netflix.fandom.com/wiki/Category:Characters`)
    .then(res => res.text)
    .then(parse)
    .then(console.log)
};

scraper();

module.exports = { scraper };