var _ = require("lodash");

var chainCapped = function(words) {
  return _.chain(words)
  .sortBy()
  .map(function(word){
    return word.toUpperCase() + "CHAINED";
  })
};

module.exports = chainCapped;
