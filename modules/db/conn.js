/*requiring mysql node modules */
var mysql = require("mysql");

var method = db.prototype;

function db() {
	/*
		creating MySql database connection 
	*/
	var con = mysql.createPool({
		host : 'localhost',
	  	user : 'root',
	  	password : 'root',
	  	database : '',
	  	multipleStatements: true
	});
	this.vc_ignition=con;
}
method.getcon = function() {
	return this;
};

module.exports = db;
