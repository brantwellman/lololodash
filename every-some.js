var _ = require('lodash');

var warmHot = function(cities){
  var sorted  = { hot: [], warm: []};

  _.forEach(cities, function(temps, city){
    if (_.every(temps, function(temp){
      return temp > 19
    })) {
      sorted.hot.push(city);
    } else if (_.some(temps, function(temp) {
       return temp > 19
    })) {
      sorted.warm.push(city);
    }
  });
  return sorted;
}

module.exports = warmHot;
