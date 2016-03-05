var request = require('request');
var quotes = require('./quote.js');

module.exports = function(req, res) {
  var quote = quotes.getQuote();

  res.json([{
    'title': 'Click for some random words of wisdom',
    'text': quote
  }]);
};
