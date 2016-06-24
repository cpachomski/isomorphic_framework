'use strict';

var _hapi = require('hapi');

var _hapi2 = _interopRequireDefault(_hapi);

var _nunjucks = require('nunjucks');

var _nunjucks2 = _interopRequireDefault(_nunjucks);

var _Application = require('./lib/Application');

var _Application2 = _interopRequireDefault(_Application);

var _HelloController = require('./controllers/HelloController');

var _HelloController2 = _interopRequireDefault(_HelloController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//create server
var server = new _hapi2.default.Server();

server.connection({
	host: 'localhost',
	port: 8000
});

var app = new _Application2.default({
	'/hello/{name*}': _HelloController2.default
}, {
	server: server
});

app.start();