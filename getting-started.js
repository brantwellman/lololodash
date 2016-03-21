var _ = require("lodash");

var filterStuff = function(users) {
  return _.filter(users, {active : true});
};

module.exports = filterStuff
