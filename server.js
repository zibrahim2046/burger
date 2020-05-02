// Dependencies 
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

// Defines the  PORT
var PORT = process.env.PORT || 3000;

var app = express();


app.use(express.static("public"));
// app.use(bodyParser.urlencoded({ extend: true }));

app.use(bodyParser.json());

// Sets the Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Imports the routes and gives the server access
// var routes = require(".controllers/burgers_controller.js")

// app.use(routes);

// Listener for when server is initialized
app.listen(PORT, function(){
    console.log("App now listening at localhost:" + PORT);
});