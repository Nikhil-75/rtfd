var express = require('express');
var app = express();
app.get('/', function (req, res) {
res.send("Welocme to Express!");
});
app.listen(5000);