const request = require('superagent');
const { parse } = require ('node-html-parser');

const titlesList = html => html
  .querySelectorAll('h2.pi-title')
  .map(node => node.rawText);

const scraper = () => {
  return request
    .get(`https://dark-netflix.fandom.com/wiki/Jonas_Kahnwald`)
    .then(res => res.text)
    .then(parse)
    .then(titlesList)
    .then(console.log)
};

scraper();

module.exports = { scraper };