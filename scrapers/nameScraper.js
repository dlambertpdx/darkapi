const request = require('superagent');
const { parse } = require('node-html-parser');

module.exports = () => {
  // eslint-disable-next-line quotes
  return request.get(`https://dark-netflix.fandom.com/wiki/Category:Characters`)
    .then(res => res.text)
    .then(parse)
    .then(findCharLink)
    .then(findCharNames);
};

const findCharLink = html => html.querySelectorAll('.category-page__member-link');
const findCharNames = objs => {
  const names = objs.map(obj => obj.childNodes[0].rawText);
  return names.filter(name => !name.includes('Category:') && !name.includes('Minor Characters') && !name.includes('Character List'));
};