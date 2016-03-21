var _ = require('lodash');

var orderTotal = function(orders){
  var groupedOrders = _.groupBy(orders, 'article');

console.log(groupedOrders)
  var finalTotals = []
  _.forEach(groupedOrders, function(orders, article){
    var totalOrder = _.reduce(orders, function(result, article) {
      return result + article.quantity;
    }, 0);
    finalTotals.push( {article: parseInt(article), total_orders: totalOrder})
  });
  return _.sortBy(finalTotals,'total_orders').reverse();
};

module.exports = orderTotal;
