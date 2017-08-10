/*requiring node modules starts */
var bodyParser = require('body-parser');
var md5      		= require('md5');

var striptags = require('striptags');

/*requiring node modules starts */

var method=routes.prototype;

function routes(app,connection,sessionInfo){

	app.use(bodyParser.urlencoded({
		extended: true
	}));

	app.use(bodyParser.json());

	
	app.get('/', function(req, res){
		res.render('index');
	});

	app.get('/403', function(req, res){
		res.clearCookie(md5("_id"));
		res.clearCookie(md5("_token"));

		res.render('403');
	});

}

method.getroutes=function(){
	return this;
}

module.exports = routes;
