const basicInfo = require('./basicinfo');
const servers = require('./servers');
const tags = require('./tags');
const lenguajes = require('./lenguaje');

module.exports = {
    ...basicInfo,
    ...servers,
    ...tags,
    ...lenguajes
};