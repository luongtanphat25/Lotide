const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const flatten = require('./flatten');
const countOnly = require('./countOnly');

const eqArrays = require('./eqArrays');
const eqObject = require('./eqObject');
module.exports = {head, tail, middle, flatten, countOnly, eqArrays, eqObject};