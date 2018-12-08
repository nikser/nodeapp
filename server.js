var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.json({'timestamp': new Date().toJSON()})
});

var port = process.env.port || 3000;
app.listen(port, function() {
	console.log('curl http://localhost:' + port);
});
