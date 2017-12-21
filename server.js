var express = require('express');
var app = express();

var user = process.env.USER;
var pass = process.env.PASS;

app.set('port', process.env.PORT || 5000);

if (user && pass) {
  app.use(express.basicAuth(user, pass));
}

app.use(express.logger('dev'));
app.use(express.compress());
app.use(express.static(__dirname + '/build'));

app.listen(app.get('port'), function() {
  console.log('Server listening on port %s', app.get('port'));
});
