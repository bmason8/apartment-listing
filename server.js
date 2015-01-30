var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.listen(port, function() {
	console.log('look! I started my first server on port ' + port);
});
