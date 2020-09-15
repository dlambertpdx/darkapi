/* eslint-disable no-console */
const { parse } = require('node-html-parser');
const request = require('superagent');
const nameScraper = require('./nameScraper');
const { reformatData, getDataToFormat } = require('./utils');

const infoScraper = async() => {
  const names = await nameScraper();

  try {
    return Promise.all(
      names.map(name => {
        return request.get(`https://dark-netflix.fandom.com/wiki/${name}`)
          .then(res => res.text)
          .then(parse)
          .then(html => getDataToFormat(html, name))
          .then(reformatData)
          .catch(err => console.log({ name, err }));
      }));
  }
  catch(err) {
    console.error(err);
  }
};

module.exports = infoScraper;