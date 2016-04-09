var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname + "/static")));

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("players and teams - listening on port 8000");
})
