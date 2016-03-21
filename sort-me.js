var _ = require('lodash');

var sortStuff = function(items){
  return _.sortBy(items, function(items) {
    return -items.quantity;
  });
}
