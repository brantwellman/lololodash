var _ = require("lodash");

var commentsByUser = function(comments) {
  var userComments = _.groupBy(comments, 'username');

  return _.map(userComments, function(comments, username){
    return { username: username, comment_count: _.size(comments)}
  }).reverse();
};

module.exports = commentsByUser;
