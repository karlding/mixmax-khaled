var express = require('express');
var sync = require('synchronize');
var cors = require('cors');

var app = express();

app.use(function(req, res, next) {
  sync.fiber(next);
});

var corsOptions = {
  origin: /^[^.\s]+\.mixmax\.com$/,
  credentials: true
};

app.get('/typeahead', cors(corsOptions), require('./api/typeahead'));
app.get('/resolver', cors(corsOptions), require('./api/resolver'));

app.listen(process.env.PORT || 9145);
