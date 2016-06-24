'use strict';

var _hapi = require('hapi');

var _hapi2 = _interopRequireDefault(_hapi);

var _nunjucks = require('nunjucks');

var _nunjucks2 = _interopRequireDefault(_nunjucks);

var _helpers = require('./helpers');

var Helpers = _interopRequireWildcard(_helpers);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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
	path: '/hello/{name*}',
	handler: function handler(req, res) {
		_nunjucks2.default.render('index.html', Helpers.getRequestNames(req), function (err, html) {
			res(html);
		});
	}
});

server.start();