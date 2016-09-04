var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-Parser');
var cookieParser = require('cookie-parser');

var app= express();
app.use(express.static(__dirname + '/'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());


app.get('/',function(req,res){
	res.render('index.html');
});


app.listen(3300,function () {
	console.log("server is running");
});