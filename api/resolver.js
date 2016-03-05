var quotes = require('./quote.js');

module.exports = function(req, res) {
  var quote = quotes.getQuote();

  var html = '<span>' + quote + '</span>';
  res.json({
    body: html,
    raw: true
  });
};
