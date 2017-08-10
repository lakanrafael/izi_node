/*requiring node modules starts */

var app = require("express")();

app.disable('x-powered-by');

var http = require('http').Server(app);
var Session = require('express-session');
var cookieParser = require('cookie-parser'); 
/*requiring node modules ends */


// the session is stored in a cookie, so we use this to parse it
app.use(cookieParser());

var Session= Session({
	secret:'sssh',
	saveUninitialized: true,
	resave: true
});


app.use(Session);

var sessionInfo;

/* requiring config file starts*/
var config =require('./modules/config/view.js')(app);
/* requiring config file ends*/

/* requiring config db.js file starts*/
var db = require("./modules/db/conn.js");
var connection_object= new db();
var connection=connection_object.connection; // getting conncetion object here 
/* requiring config db.js file ends*/


/* 
	1. Requiring main.js file, which takes care of all landing page operation.
	2. Passing object of express, Database connection, expressSession and cookieParser.
*/
require('./modules/routes/main.js')(app,connection,Session,cookieParser,sessionInfo);


/*
	Initializing our application  
*/
http.listen(9080,function(){
    console.log("Ignition website listening on port 9080");
});