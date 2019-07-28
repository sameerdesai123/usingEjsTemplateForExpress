var express = require('express');
var app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("view options", {layout: false});

app.get('/', function(req, res) {
    res.render('index');
});

app.listen(5000, function() {
    console.log("Server is running at port 5000");
})

