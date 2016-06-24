'use strict';

var _hapi = require('hapi');

var _hapi2 = _interopRequireDefault(_hapi);

var _nunjucks = require('nunjucks');

var _nunjucks2 = _interopRequireDefault(_nunjucks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//read templates from dist directory
_nunjucks2.default.configure('./dist');

//create server
var server = new _hapi2.default.Server();

server.connection({
	host: 'localhost',
	port: 8000
});

//add test route
server.route({
	method: 'GET',
	path: '/hello/{fname}/{lname}',
	handler: function handler(req, res) {
		_nunjucks2.default.render('index.html', {
			fname: req.params.fname,
			lname: req.params.lname
		}, function (err, html) {
			res(html);
		});
	}
});

server.start();