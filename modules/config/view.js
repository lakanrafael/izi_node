var express = require("express");
var path= require('path'); 
var hbs = require('express-handlebars');
 
var method=config.prototype;

function config(app){
	
	// Setting .html as the default template extension
	app.set('view engine', 'html');

	// Initializing the ejs template engine
	app.engine('hbs', hbs({ extname: 'hbs', defaultLayout:'main' }));
	app.set('view engine', 'hbs');

	//Public Files 
	app.use('/public', express.static('public'));

	app.use(express.static(path.join(__dirname, 'public')));
}

method.get_config=function(){
	return this;
}

module.exports = config;