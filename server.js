/* Dependencies */
const express = require("express");
const bodyParser = require("body-parser");


/* Configuration */
var app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());


/* Application */
let data = null;

app.post("/", function (req, res) {
	data = req.body;
	console.log("Reseived data: " + JSON.stringify(req.body));
	res.json({'data': data});
});

app.get("/", function(req, res) {
	res.json({"data": data});
});

/* Running */
var port = process.env.port || 3000;
app.listen(port, function() {
	console.log("Application started: curl http://localhost:" + port);
});
