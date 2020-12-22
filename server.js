/* JS features */
Array.prototype.flatMap = function (f) {
	return this.map(f).reduce((x, y) => x.concat(y), [])
}

/* Dependencies */
const express = require("express");
const bodyParser = require("body-parser");
const Persons = require('./persons');

/* Configuration */
var app = express();

app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(bodyParser.json());


/* Application */
app.get("/", function (req, res) {
	res.send('Node app - OK');
});

app.get("/persons", function (req, res) {
	const name = req.query.name;
	const person = Persons.findPersonByName(name);
	res.json(person);
});

/* Metrics */
app.get("/metrics", function (req, res) {
	res
		.type('text/plain')
		.send(`# HELP process_virtual_memory_bytes Virtual memory size in bytes.
# TYPE process_virtual_memory_bytes gauge
my_custom_app_metric 133
`);
});

/* Running */
var port = process.env.port || 3000;
app.listen(port, function () {
	console.log("Application started: curl http://localhost:" + port);
});
